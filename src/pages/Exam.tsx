import { useState, useEffect } from 'react';
import { examQuestionPool, getRandomQuestions, examConfig } from '@/data/examData';
import { ExamTimer } from '@/components/ExamTimer';
import { QuestionCard } from '@/components/QuestionCard';
import { QuestionNavigation } from '@/components/QuestionNavigation';
import { ExamResults } from '@/components/ExamResults';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, CheckCircle2, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Exam() {
  const [examState, setExamState] = useState<'instructions' | 'cbt' | 'theory' | 'completed'>('instructions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const { toast } = useToast();

  const currentQuestion = examQuestions[currentQuestionIndex];
  const answeredQuestions = new Set(Object.keys(userAnswers).map(Number));

  const startExam = () => {
    const questions = getRandomQuestions(60);
    setExamQuestions(questions);
    setExamState('cbt');
    setStartTime(Date.now());
  };

  const submitExam = () => {
    setEndTime(Date.now());
    setExamState('completed');
    toast({
      title: "Exam Submitted",
      description: "Your answers have been recorded successfully."
    });
  };

  const handleTimeUp = () => {
    toast({
      title: "Time's Up!",
      description: "The exam has been automatically submitted."
    });
    submitExam();
  };

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const goToQuestion = (questionNumber: number) => {
    setCurrentQuestionIndex(questionNumber - 1);
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const retakeExam = () => {
    setExamState('instructions');
    setCurrentQuestionIndex(0);
    setExamQuestions([]);
    setStartTime(0);
    setEndTime(0);
  };

  if (examState === 'instructions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-primary-glow rounded-full w-16 h-16 flex items-center justify-center">
              <Play className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              {examConfig.title}
            </CardTitle>
            <Badge variant="outline" className="mx-auto">
              {examConfig.totalQuestions} Questions • {examConfig.cbtDuration} + {examConfig.theoryDuration} Minutes
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-accent">Exam Instructions:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {examConfig.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Important Notes:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Make sure you have a stable internet connection</li>
                <li>• Do not refresh or close the browser during the exam</li>
                <li>• The timer will continue counting even if you navigate away</li>
                <li>• Your progress is automatically saved</li>
              </ul>
            </div>
            
            <Button 
              onClick={startExam} 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90"
            >
              Start Exam
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (examState === 'completed') {
    const timeSpent = Math.floor((endTime - startTime) / 1000);
    return (
      <ExamResults 
        questions={examQuestions}
        userAnswers={userAnswers}
        timeSpent={timeSpent}
        onRetakeExam={retakeExam}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-primary">
                {examConfig.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {examConfig.totalQuestions}
              </p>
            </div>
            <ExamTimer 
              duration={examConfig.cbtDuration}
              onTimeUp={handleTimeUp}
              isActive={examState === 'cbt'}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Navigation - Hidden on mobile, sidebar on desktop */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <QuestionNavigation
                totalQuestions={examConfig.totalQuestions}
                currentQuestion={currentQuestionIndex + 1}
                answeredQuestions={answeredQuestions}
                onQuestionSelect={goToQuestion}
              />
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="space-y-6">
              <QuestionCard
                question={currentQuestion}
                selectedAnswer={userAnswers[currentQuestion.id]}
                onAnswerSelect={handleAnswerSelect}
              />

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={goToPrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="text-sm text-muted-foreground">
                  {answeredQuestions.size} of {examConfig.totalQuestions} answered
                </div>

                {currentQuestionIndex === examQuestions.length - 1 ? (
                  <Button 
                    onClick={submitExam}
                    className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90"
                  >
                    Submit Exam
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={goToNext}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}