import { useState, useEffect } from 'react';
import GameStatus from '../../../constants/game-status.enum';
import useActivePiece from './useActivePiece.hook';
import useBoard from './useBoard.hook';
import useBag from './useBag.hook';
import useHoldBag from './useHoldBag.hook';

function useTetris() {
  const board = useBoard();
  const bag = useBag();
  const activePiece = useActivePiece();
  const holdBag = useHoldBag();

  const [gameStatus, setGameStatus] = useState(GameStatus.idle);

  const startGame = () => {
    setGameStatus(GameStatus.playing);
    activePiece.setValue(bag.drawNextPiece());
  }

  const stopGame = () => {
    // will do later
  }

  const onArrowLeftKeyPressed = () => {
    if (board.pieceCollided(activePiece.value, { x: -1, y: 0 })) return;

    activePiece.moveLeft();
  }

  const onArrowRightKeyPressed = () => {
    if (board.pieceCollided(activePiece.value, { x: 1, y: 0 })) return;

    activePiece.moveRight();
  }

  const onArrowDownKeyPressed = () => {
    if (board.pieceCollided(activePiece.value, { x: 0, y: 1 })) {
      board.lockBoardAndClearRows(activePiece.value);
      activePiece.setValue(bag.drawNextPiece());
      holdBag.resetCanSwapValue();
    } else {
      activePiece.moveDown();
    }
  }

  const onArrowUpKeyPressed = () => {
    const rotatedMatrix = activePiece.value.matrix[0].map((_, columnIndex) =>
      activePiece.value.matrix.map(row => row[columnIndex]).reverse()
    );
    const rotatedPiece = {
      matrix: rotatedMatrix,
      x: activePiece.value.x,
      y: activePiece.value.y,
    }

    if (board.pieceCollided(rotatedPiece)) return;

    activePiece.rotate(rotatedMatrix);
  }

  const onSpaceKeyPressed = () => {
    const hardDropY = board.getHardDropYPosition(activePiece.value);
    let droppedPiece = activePiece.value;
    if (activePiece.value.y !== hardDropY) {
      droppedPiece = activePiece.hardDrop(hardDropY);
    }
    console.log(droppedPiece);
    board.lockBoardAndClearRows(droppedPiece);
    activePiece.setValue(bag.drawNextPiece());
    holdBag.resetCanSwapValue();
  }

  const onShiftKeyPressed = () => {
    if (holdBag.canSwap) {
      const swappedPieceType = holdBag.swap(activePiece.value.type);
      if (swappedPieceType) {
        activePiece.setValue(swappedPieceType);
      } else {
        activePiece.setValue(bag.drawNextPiece());
        holdBag.resetCanSwapValue();
      }
    }
  }

  const handleKeyDown = (e) => {
    if (gameStatus !== GameStatus.playing) return;

    if (e.key === 'ArrowLeft') {
      onArrowLeftKeyPressed();
    } else if (e.key === 'ArrowRight') {
      onArrowRightKeyPressed();
    } else if (e.key === 'ArrowDown') {
      onArrowDownKeyPressed();
    } else if (e.key === 'ArrowUp') {
      onArrowUpKeyPressed();
    } else if (e.key === ' ') {
      onSpaceKeyPressed();
    } else if (e.key === 'Shift') {
      onShiftKeyPressed();
    }
  }

  // run when activePiece value change
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return (() => window.removeEventListener('keydown', handleKeyDown));
  }, [activePiece.value]);

  // run after every render
  useEffect(() => {
    if (gameStatus !== GameStatus.playing) return;

    const interval = setInterval(() => { onArrowDownKeyPressed(); }, 500);

    return (() => clearInterval(interval));
  });

  return {
    startGame,
    stopGame,
    displayBoard: board.displayBoard(activePiece.value),
    nextPieces: bag.peekNextPieces(5),
    holdPiece: holdBag.peekHoldPiece(),
  }
}


export default useTetris;
