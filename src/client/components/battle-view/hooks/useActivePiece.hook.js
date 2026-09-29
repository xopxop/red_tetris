import { useState } from 'react';
import { TETROMINO_DEFINITIONS } from '../../../constants/tetrominos';

function useActivePiece() {
  const [ value, _setValue ] = useState(null);

  const setValue = (type) => {
    const matrix = TETROMINO_DEFINITIONS[type];
    const x = Math.floor((10 - matrix[0].length) / 2);

    _setValue({ type, matrix, x, y: 0 });
  }

  const moveLeft = () => {
    _setValue(prev => ({ ...prev, x: prev.x - 1, y: prev.y }));
  }

  const moveRight = () => {
    _setValue(prev => ({ ...prev, x: prev.x + 1, y: prev.y }))
  }

  const moveDown = () => {
    _setValue(prev => ({ ...prev, x: prev.x, y: prev.y + 1 }));
  }

  const rotate = (rotatedMatrix) => {
    _setValue(prev => ({ ...prev, matrix: rotatedMatrix}));
  }

  return ({ value, setValue, moveLeft, moveRight, moveDown, rotate });
}

export default useActivePiece;
