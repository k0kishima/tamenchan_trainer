import { Question } from '@/features/game/components/Question';

type Question = [number, number];

const questions: Question[] = [
  [1122334478999, 1469],
  [1234567778899, 14789],
];

// TODO: implement this.
export const chooseQuestions = (quantity: number): Question[] => {
  return questions;
};
