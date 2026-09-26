import { useState, useEffect } from 'react';
import { TETROMINOS } from '../../constants/tetrominos';

function createEmptyBoard() {
  return (Array.from({ length: 20 }, () => Array(10).fill('')));
};

function generateBag() {
  const keys = Object.keys(TETROMINOS);
  return (keys.sort(() => Math.random() - 0.5));
}

function pieceCollided(piece, board, { x: offsetX, y: offsetY }) {
  for (let yPiece = 0; yPiece < piece.shape.length; yPiece++) {
    for (let xPiece = 0; xPiece < piece.shape[yPiece].length; xPiece++) {
      if (piece.shape[yPiece][xPiece] !== '') {
        const xBoard = piece.x + xPiece + offsetX;
        const yBoard = piece.y + yPiece + offsetY;
        if (xBoard < 0 || xBoard >= 10 || yBoard >= 20 || (yBoard >= 0 && board[yBoard][xBoard] !== '')) {
          return (true);
        }
      }
    }
  }
  return (false);
}

function getRowsToClear(board) {
  let count = 0;

  for (let y = board.length - 1; y >= 0; y--) {
    for (let x = board[y].length; x >=0; x--) {
      const cell = board[y][x];
      if (cell === '') {
        return (count);
      }
    }
    count++;
  }

  return (count);
}

function getRefreshedBoard(pieceToLock, board) {
  let newBoard = board.map(row => [...row]);
  pieceToLock.shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== '') {
        newBoard[pieceToLock.y + y][pieceToLock.x + x] = cell;
      }
    })
  });

  const rowsToClear = getRowsToClear(newBoard);
  if (rowsToClear) {
    const emptyRows = Array.from({ length: rowsToClear }, () => Array(10).fill(''));
    newBoard.splice(-rowsToClear);
    newBoard.unshift(...emptyRows);
  }

  return (newBoard);
}

function useTetrisBoad() {
  const [board, setBoard] = useState(createEmptyBoard);
  const [activePiece, setActivePiece] = useState(null);

  const spawnPiece = (pieceId) => {
    const shape = TETROMINOS[pieceId];
    const pos = { x: Math.floor((10 - matrix[0].length) / 2), y: 0 };
    setActivePiece({ shape, pos });
  };

  const moveLeft = () => {
    if (!activePiece) return;
    if (pieceCollided(activePiece, board, { x: -1, y: 0 })) return;

    setActivePiece(prev => ({ ...prev, x: prev.x - 1, y: prev.y }));
  }

  const moveRight = () => {
    if (!activePiece) return;
    if (pieceCollided(activePiece, board, { x: 1, y: 0 })) return;

    setActivePiece(prev => ({ ...prev, x: prev.x + 1, y: prev.y }))
  }

  const moveDown = () => {
    if (!activePiece) return;

    if (pieceCollided(activePiece, board, { x: 0, y: 1 })) {
      setBoard(getRefreshedBoard(activePiece, board));
      //spawnPiece(nextQueue);
    } else {
      setActivePiece(prev => ({ ...prev, x: prev.x, y: prev.y + 1 }));
    }
  }

  const rotate = () => {
    if (!activePiece) return;

    const rotatedShape = activePiece.shape[0].map((_, columnIndex) =>
      activePiece.shape.map(row => row[columnIndex]).reverse()
    );
    const rotatedPiece = {
      shape: rotatedShape,
      x: activePiece.x,
      y: activePiece.y,
    }
    if (pieceCollided(rotatedPiece, board, { x: 0, y: 0})) return;

    setActivePiece(rotatedPiece);
  }
}

function useTetrisBag() {
  const [queue, setQueue] = useState()
}

function useTetrisGame() {
}

function useTetris() {
  const [board, setBoard] = useState(createEmptyBoard);
  const [activePiece, setActivePiece] = useState();
  const [nextQueue, setNextQueue] = useState();

  const spawnPiece = (queue) => {
    const currentQueue = [...queue];
    const type = currentQueue.shift();
    const shape = TETROMINOS[type];
    const newPiece = { shape: shape, x: 4, y: 0 };
    setActivePiece(newPiece);
    setNextQueue(currentQueue);
  }

  const rotate = () => {
    if (!activePiece) return;
    const rotatedShape = activePiece.shape[0].map((_, columnIndex) =>
      activePiece.shape.map(row => row[columnIndex]).reverse()
    );
    const rotatedPiece = {
      shape: rotatedShape,
      x: activePiece.x,
      y: activePiece.y,
    }
    if (pieceCollided(rotatedPiece, board, { x: 0, y: 0})) return;

    setActivePiece(rotatedPiece);
  }

  const moveDown = () => {
    if (!activePiece) return;
    if (pieceCollided(activePiece, board, { x: 0, y: 1 })) {
      setBoard(getRefreshedBoard(activePiece, board));
      spawnPiece(nextQueue);
    } else {
      setActivePiece(prev => ({ ...prev, x: prev.x, y: prev.y + 1 }));
    }
  }

  const moveLeft = () => {
    if (!activePiece) return;
    if (pieceCollided(activePiece, board, { x: -1, y: 0 })) return;

    setActivePiece(prev => ({ ...prev, x: prev.x - 1, y: prev.y }));
  }

  const moveRight = () => {
    if (!activePiece) return;
    if (pieceCollided(activePiece, board, { x: 1, y: 0 })) return;

    setActivePiece(prev => ({ ...prev, x: prev.x + 1, y: prev.y }))
  }

  useEffect(() => {
    const bag = generateBag();
    setNextQueue(bag);
    spawnPiece(bag);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveDown();
    }, 500);
    return (() => clearInterval(interval));
  }, [activePiece]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      moveLeft();
    } else if (e.key === 'ArrowRight') {
      moveRight();
    } else if (e.key === 'ArrowUp') {
      rotate();
    } else if (e.key === 'ArrowDown') {
      moveDown();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return (() => window.removeEventListener('keydown', handleKeyDown));
  }, [activePiece])

  return [activePiece, nextQueue, board];
};

function useTetrisBag() {
  const [queue, setQueue] = useState(() => );

  const drawNext = () => {
    let currentQueue = [...queue];

    if (currentQueue.length <= 7) {
      currentQueue = [...currentQueue, ...generateBag()];
    }

    const nextType = currentQueue.shift();
    setNextQueue(currentQueue);

    return (nextType);
  }

  const peekNext = (count = 3) => {
    return (queue.slice(0, count).map(type => TETROMINOS[type]));
  }

  return { peekNext }
}

function useTetrisGame(dropSpeed = 1000) {
  const [gameOver, setGameOver] = useState(false);
  const board = useTetrisBoard();
  const bag = useTetrisBag();

  const startGame = () => {
    board.resetBoard();
    bag.resetBag();
    setGameOver(false);
    spawnNext();
  }


  return {
    displayBoard: board.displayBoard,
    nextPieces: bag.peekNext(3),
    gameOver,
    controls: {
      moveLeft: board.moveLeft,
      moveRight: board.moveRight,
      moveDown: board.moveDown,
      rotatePiece: board.rotatePiece,
    }
  }
}


export default useTetris;
