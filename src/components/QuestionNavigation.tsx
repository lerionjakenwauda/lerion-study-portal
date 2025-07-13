import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

interface QuestionNavigationProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Set<number>;
  onQuestionSelect: (questionNumber: number) => void;
}

export const QuestionNavigation = ({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  onQuestionSelect
}: QuestionNavigationProps) => {
  const getQuestionStatus = (questionNumber: number) => {
    if (questionNumber === currentQuestion) return 'current';
    if (answeredQuestions.has(questionNumber)) return 'answered';
    return 'unanswered';
  };

  const getButtonVariant = (status: string) => {
    switch (status) {
      case 'current': return 'primary';
      case 'answered': return 'success';
      default: return 'outline';
    }
  };

  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="font-semibold text-sm mb-2">Question Navigation</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          <Badge variant="primary" className="h-6">Current</Badge>
          <Badge variant="success" className="h-6">Answered</Badge>
          <Badge variant="outline" className="h-6">Unanswered</Badge>
        </div>
      </div>
      
      <ScrollArea className="h-64">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((questionNumber) => {
            const status = getQuestionStatus(questionNumber);
            return (
              <Button
                key={questionNumber}
                variant={getButtonVariant(status)}
                size="sm"
                className="h-8 w-12 text-xs font-medium"
                onClick={() => onQuestionSelect(questionNumber)}
              >
                {questionNumber}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
      
      <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
        <div className="flex justify-between">
          <span>Answered: {answeredQuestions.size}/{totalQuestions}</span>
          <span>Progress: {Math.round((answeredQuestions.size / totalQuestions) * 100)}%</span>
        </div>
      </div>
    </Card>
  );
};