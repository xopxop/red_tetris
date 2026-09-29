import { useState, useRef } from 'react';
import { PREVIEW_TETROMINO_CONFIGS } from '../../../constants/tetrominos';
function useHoldBag() {
  const [ value, setValue ] = useState(null);
  const canSwapValueRef = useRef(true);

  const swap = (pieceType) => {
    const returnedValue = value;

    setValue(pieceType);
    canSwapValueRef.current = false;
    return (returnedValue);
  }

  const resetCanSwapValue = () => {
    canSwapValueRef.current = true;
  }

  const peekHoldPiece = () => {
    if (!value) return null;
    return PREVIEW_TETROMINO_CONFIGS[value];
  }

  return ({
    canSwap: canSwapValueRef.current,
    swap,
    resetCanSwapValue,
    peekHoldPiece,
  });
}

export default useHoldBag;
