import { Question } from '@/data/examData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D';
  onAnswerSelect: (answer: 'A' | 'B' | 'C' | 'D') => void;
  isReviewMode?: boolean;
  showExplanation?: boolean;
}

export const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  isReviewMode = false,
  showExplanation = false 
}: QuestionCardProps) => {
  const options = ['A', 'B', 'C', 'D'] as const;

  const getOptionButtonVariant = (option: 'A' | 'B' | 'C' | 'D') => {
    if (isReviewMode && showExplanation) {
      if (option === question.correctAnswer) return 'success';
      if (option === selectedAnswer && option !== question.correctAnswer) return 'destructive';
    }
    
    return selectedAnswer === option ? 'primary' : 'outline';
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="outline" className="shrink-0">
            Question {question.id}
          </Badge>
          {isReviewMode && (
            <Badge 
              variant={selectedAnswer === question.correctAnswer ? 'success' : 'destructive'}
              className="shrink-0"
            >
              {selectedAnswer === question.correctAnswer ? 'Correct' : 'Incorrect'}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="prose prose-sm max-w-none">
          <p className="text-foreground leading-relaxed text-base">
            {question.question}
          </p>
        </div>

        <div className="grid gap-3">
          {options.map((option) => (
            <Button
              key={option}
              variant={getOptionButtonVariant(option)}
              className="justify-start text-left h-auto p-4 whitespace-normal"
              onClick={() => !isReviewMode && onAnswerSelect(option)}
              disabled={isReviewMode}
            >
              <span className="font-semibold mr-3 shrink-0">{option}.</span>
              <span className="flex-1">{question.options[option]}</span>
            </Button>
          ))}
        </div>

        {showExplanation && (
          <Card className="bg-muted/50 border-primary/20">
            <CardContent className="pt-4">
              <h4 className="font-semibold text-sm text-primary mb-2">Explanation:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.explanation}
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};