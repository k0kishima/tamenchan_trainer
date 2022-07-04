import React from 'react';

import { Game } from '@/features/game';
import { GameContext } from '@/contexts/Game';
import { chooseQuestions } from '@/utils/question';

const questions = chooseQuestions(2);

function App() {
  return (
    <GameContext.Provider value={{ tileColor: 'm', questions: questions }}>
      <Game />
    </GameContext.Provider>
  );
}

export default App;
