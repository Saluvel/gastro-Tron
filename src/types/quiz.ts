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
  visualHint?: string;
  pillar?: 'Must-Know' | 'Board Prep' | 'Mastery';
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
  reviewIds: string[];
  streak: number;
  lastSession: string;
  achievements: string[];
  hasCompletedTutorial?: boolean;
  lastMissionDate?: string;
  missionProgress?: number;
  settings?: {
    sound: boolean;
    theme: 'tron' | 'neon' | 'hacker';
  };
  savedPearls: {
    questionId: string;
    text: string;
    topic: string;
    date: number;
  }[];
}
