export type Difficulty = 'Fellow' | 'Staff' | 'Subspecialist';

export interface Question {
  id: string;
  topic: string;
  difficulty: Difficulty;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  fisiopato: string;
  clinicalPearl: string;
  guideline: string;
  whyWrong?: {
    [key: number]: string;
  };
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface UserProgress {
  totalAttempted: number;
  totalCorrect: number;
  byTopic: {
    [topicId: string]: {
      attempted: number;
      correct: number;
    };
  };
  weakTopics: string[];
  streak: number;
  lastSession: string;
  achievements: string[];
  settings?: {
    sound: boolean;
    theme: 'tron' | 'neon' | 'hacker';
  };
}
