import { createContext } from 'react';
import { TileColor } from '@/types';

type State = {
  tileColor: TileColor;
  questions: [number, number][];
};

export const initialState: State = {
  tileColor: 'm',
  questions: [],
};

export const GameContext = createContext(initialState);
