import { Question } from '@/data/examData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { QuestionCard } from './QuestionCard';
import { Trophy, Target, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

interface ExamResultsProps {
  questions: Question[];
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  timeSpent: number; // in seconds
  onRetakeExam: () => void;
}

export const ExamResults = ({ questions, userAnswers, timeSpent, onRetakeExam }: ExamResultsProps) => {
  const [showReview, setShowReview] = useState(false);
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState(0);

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (!userAnswer) {
        unanswered++;
      } else if (userAnswer === question.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const percentage = Math.round((correct / questions.length) * 100);
    const passed = percentage >= 83; // Assuming 83% is passing grade

    return {
      correct,
      incorrect,
      unanswered,
      percentage,
      passed,
      total: questions.length
    };
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const results = calculateResults();

  if (showReview) {
    const currentQuestion = questions[reviewQuestionIndex];
    const userAnswer = userAnswers[currentQuestion.id];

    return (
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => setShowReview(false)}
            className="mb-4"
          >
            ← Back to Results
          </Button>
          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Answer Review</h2>
            <Badge variant="outline">
              {reviewQuestionIndex + 1} of {questions.length}
            </Badge>
          </div>
          
          <div className="flex gap-2 mb-6">
            <Button
              variant="outline"
              onClick={() => setReviewQuestionIndex(Math.max(0, reviewQuestionIndex - 1))}
              disabled={reviewQuestionIndex === 0}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setReviewQuestionIndex(Math.min(questions.length - 1, reviewQuestionIndex + 1))}
              disabled={reviewQuestionIndex === questions.length - 1}
            >
              Next
            </Button>
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={userAnswer}
          onAnswerSelect={() => {}}
          isReviewMode={true}
          showExplanation={true}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          {results.passed ? (
            <Trophy className="h-16 w-16 text-accent" />
          ) : (
            <Target className="h-16 w-16 text-muted-foreground" />
          )}
        </div>
        
        <h1 className="text-3xl font-bold mb-2">
          {results.passed ? 'Congratulations!' : 'Exam Complete'}
        </h1>
        
        <Badge 
          variant={results.passed ? 'success' : 'destructive'} 
          className="text-lg px-4 py-2"
        >
          {results.percentage}% - {results.passed ? 'PASSED' : 'FAILED'}
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm text-muted-foreground">Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {results.correct}/{results.total}
            </div>
            <Progress value={results.percentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Correct
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {results.correct}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              Incorrect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {results.incorrect}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Time Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatTime(timeSpent)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={() => setShowReview(true)}
          variant="outline"
          size="lg"
        >
          Review Answers
        </Button>
        
        <Button 
          onClick={onRetakeExam}
          size="lg"
        >
          Retake Exam
        </Button>
      </div>
    </div>
  );
};