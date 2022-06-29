import { createContext } from 'react';
import { TileColor } from '@/types';

type State = {
  tileColor: TileColor;
};

export const initialState: State = {
  tileColor: 'm',
};

export const GameContext = createContext(initialState);
