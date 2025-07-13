import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ExamTimerProps {
  duration: number; // in minutes
  onTimeUp: () => void;
  isActive: boolean;
}

export const ExamTimer = ({ duration, onTimeUp, isActive }: ExamTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const isWarning = timeLeft <= 300; // last 5 minutes
  const isCritical = timeLeft <= 60; // last minute

  return (
    <Card className={`px-4 py-3 ${
      isCritical 
        ? 'bg-destructive/10 border-destructive text-destructive' 
        : isWarning 
        ? 'bg-warning/10 border-warning text-warning' 
        : 'bg-card border-border'
    }`}>
      <div className="flex items-center gap-2">
        {isCritical ? (
          <AlertTriangle className="h-5 w-5 animate-pulse" />
        ) : (
          <Clock className="h-5 w-5" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium">Time Remaining</span>
          <span className={`text-lg font-mono font-bold ${
            isCritical ? 'animate-pulse' : ''
          }`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </Card>
  );
};