import { useState } from 'react';

function useBoard() {
  const createEmptyBoard = () => Array.from({ length: 20 }, () => Array(10).fill(''));
  const [board, setBoard] = useState(createEmptyBoard());

  const pieceCollided = (piece, { x: offsetX, y: offsetY } = { x: 0, y: 0 }) => {
    for (let yPiece = 0; yPiece < piece.matrix.length; yPiece++) {
      for (let xPiece = 0; xPiece < piece.matrix[yPiece].length; xPiece++) {
        if (piece.matrix[yPiece][xPiece] !== '') {
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

  const getRowsToClear = (board) => {
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

  const lockBoardAndClearRows = (pieceToLock) => {
    let newBoard = board.map(row => [...row]);

    pieceToLock.matrix.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === '') return;
        newBoard[pieceToLock.y + y][pieceToLock.x + x] = cell;
      })
    });

    const rowsToClear = getRowsToClear(newBoard);
    
    if (rowsToClear) {
      const emptyRows = Array.from({ length: rowsToClear }, () => Array(10).fill(''));
 
      newBoard.splice(-rowsToClear);
      newBoard.unshift(...emptyRows);
    }

    setBoard(newBoard);
  }

  const displayBoard = (activePiece) => {
    const displayBoard = board.map(row => [...row]);

    if (activePiece) {
      const { matrix, x, y } = activePiece;

      matrix.forEach((row, r) => {
        row.forEach((cell, c) => {
          if (cell === '') return;
          displayBoard[y + r][x + c] = cell;
        })
      });
    }
    
    return (displayBoard);
  }

  return ({ displayBoard, pieceCollided, lockBoardAndClearRows });
}

export default useBoard;
