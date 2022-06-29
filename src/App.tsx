import React from 'react';

import { Game } from '@/features/game';
import { GameContext } from '@/contexts/Game';

function App() {
  return (
    <GameContext.Provider value={{ tileColor: 'm' }}>
      <Game />
    </GameContext.Provider>
  );
}

export default App;
