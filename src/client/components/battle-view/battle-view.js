import { useState, useEffect } from 'react';
import * as style from './battle-view.css';
import TETROMINOS from '../../constants/tetrominos'

const createEmptyBoard = () =>
  Array.from({ length: 20 }, () => Array(10).fill(''));

function PlayField() {
  const [board, setBoard] = useState(createEmptyBoard);
  const [activePiece, setActivePiece] = useState();
  const [nextQueue, setNextQueue] = useState();

  const generateBag = () => {
    const keys = Object.keys(TETROMINOS);
    return keys.sort(() => Math.random() - 0.5);
  }

  const spawnPiece = (queue) => {
    const currentQueue = [...queue];
    const type = currentQueue.shift();
    const shape = TETROMINOS[type];
    const newPiece = {
      shape: shape,
      x: 4,
      y: 0
    }
    setActivePiece(newPiece);
  }

  useEffect(() => {
    const initialBag = generateBag();
    spawnPiece(initialBag);
  }, []);


  useEffect(() => {
    if (!activePiece) return;
    const interval = setInterval(() => {
      setActivePiece((prev) => {
        console.log(prev);
        if (!prev) return;
        return { ...prev, y: prev.y + 1 }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activePiece]);

  //useEffect(() => {
    //window.addEventListener('keydown', handleKeyDown);
    //return window.removeEventListener('keydown', handleKeyDown);
  //});
 
  const displayedBoard = board.map(row => [...row]);
  if (activePiece) {
    const { shape, x, y } = activePiece;
    shape.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell != '') {
          displayedBoard[y + r][x + c] = cell;
        }
      })
    })
  }


  return (
    <div className={style['play-field']}>
      {displayedBoard.map((row, y) => 
        row.map((cellValue, x) => {
          const typeClass = cellValue !== '' ? `cell-${cellValue}` : '';
          return (
            <div key={`${y}-${x}`} className={`${style['cell']} ${style[typeClass]}`}></div>
          );
        })
      )}
    </div>
  );
}

function BattleView() {
  return (
    <div className={style['battle-view-container']}>
      <div className={style['chat-container']}>
        <header>Chatboard</header>
        <section>Chatbox</section>
        <section>Chat message</section>
      </div>
      <div className={style['tetris-board-container']}>
        <div className={style['hold-box']}></div>
        <PlayField />
        <div className={style['queue-box']}></div>
      </div>
      <div className={style['opponents-view-container']}>Opponents Container</div>
    </div>
  );
}

export default BattleView;
