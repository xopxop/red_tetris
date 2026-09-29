import { useState } from 'react';
import { TETROMINO_DEFINITIONS, PREVIEW_TETROMINO_CONFIGS } from '../../../constants/tetrominos';

function useBag() {
  const generateBag = () => Object.keys(TETROMINO_DEFINITIONS).sort(() => Math.random() - 0.5);
  const [bag, setBag] = useState(() => generateBag());

  const drawNextPiece = () => {
    let currentBag = [...bag];

    if (currentBag.length <= 7) {
      currentBag = [...currentBag, ...generateBag()];
    }

    const type = currentBag.shift();
    setBag(currentBag);

    return (type);
  }

  const peekNextPieces = (count = 3) => {
    return (bag.slice(0, count).map(type => PREVIEW_TETROMINO_CONFIGS[type]));
  }

  return ({ drawNextPiece, peekNextPieces });
}

export default useBag;
