import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Game } from '@/features/game';
import { GameResult } from '@/features/check';
import { GameContext } from '@/contexts/Game';
import { chooseQuestions } from '@/utils/question';

const questions = chooseQuestions(2);

function App() {
  return (
    <GameContext.Provider value={{ tileColor: 'm', questions: questions }}>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Game />} />
          <Route path={`/result`} element={<GameResult />} />
        </Routes>
      </BrowserRouter>
    </GameContext.Provider>
  );
}

export default App;
