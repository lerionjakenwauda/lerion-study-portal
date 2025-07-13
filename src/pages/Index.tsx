import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Award, Play, CheckCircle } from 'lucide-react';
import { examConfig } from '@/data/examData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Lerion Study</h1>
                <p className="text-sm text-muted-foreground">CBT Examination Portal</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow" variant="primary">
            Computer-Based Testing Platform
          </Badge>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Biology 102 Examination
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive assessment covering microbiology, plant kingdom, animal physiology, 
            and biological techniques with 60 carefully crafted questions.
          </p>
        </div>

        {/* Exam Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{examConfig.totalQuestions}</div>
              <p className="text-sm text-muted-foreground">Multiple Choice</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto p-3 bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{examConfig.duration}</div>
              <p className="text-sm text-muted-foreground">Minutes</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto p-3 bg-success/10 rounded-full w-12 h-12 flex items-center justify-center">
                <Award className="h-6 w-6 text-success" />
              </div>
              <CardTitle className="text-lg">Passing Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{examConfig.passingScore}</div>
              <p className="text-sm text-muted-foreground">out of {examConfig.totalQuestions}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto p-3 bg-warning/10 rounded-full w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-warning" />
              </div>
              <CardTitle className="text-lg">Format</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">CBT</div>
              <p className="text-sm text-muted-foreground">Computer Based Test</p>
            </CardContent>
          </Card>
        </div>

        {/* Exam Topics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">Exam Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Section A: Objective Questions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Prokaryotic and Eukaryotic Cell Structure
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Five-Kingdom Classification System
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Microbiology and Viral Structure
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Plant Kingdom Survey and Physiology
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Animal Kingdom and Body Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Laboratory Techniques and Safety
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-accent">Key Topics Include:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    Bacterial identification and Gram staining
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Plant tissue systems and meristems
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    Animal physiology and homeostasis
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Microscopy and specimen preparation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    Symbiotic relationships in nature
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    Evolutionary adaptations
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-lg mx-auto bg-gradient-to-br from-card to-muted/30 border-primary/20 shadow-lg">
            <CardContent className="pt-8">
              <div className="mb-6">
                <div className="mx-auto p-4 bg-gradient-to-br from-primary to-primary-glow rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ready to Begin?</h3>
                <p className="text-muted-foreground text-sm">
                  Make sure you have a stable internet connection and enough time to complete the exam.
                </p>
              </div>
              
              <Link to="/exam">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-lg py-6"
                >
                  Start Exam
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Lerion Study. CBT Examination Portal for Biology 102</p>
            <p className="mt-2">Designed for comprehensive biological sciences assessment</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
