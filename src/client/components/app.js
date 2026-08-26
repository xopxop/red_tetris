import { useState } from 'react';
import Game from './game.class';
import BattleView from './battle-view'

const App = () => {
  const [game] = useState(() => new Game());
  return (
    <>
      <BattleView />
    </>
  );
}

export default App;

