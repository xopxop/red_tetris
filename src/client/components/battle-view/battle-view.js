import { useState, useEffect } from 'react';
import * as style from './battle-view.css';
import useTetris from './useTetris.hook';
import { TETROMINOS_NEXT_QUEUE } from '../../constants/tetrominos';

function QueueBox({ nextQueue }) {
  const [pieces, setPieces] = useState([]);

  const spawnPiece = (type) => {
    return (TETROMINOS_NEXT_QUEUE[type]);
  }

  useEffect(() => {
    if (!nextQueue) return;

    const pieces = nextQueue.map((piece) => spawnPiece(piece));
    setPieces(pieces);
  }, [nextQueue]);
  
  return (
    <div className={style['queue-box']}>
      <span>Next</span>
      <div className={style['queue-list']}>
        {pieces.map((piece, pieceIndex) => (
          <div key={pieceIndex}
            style={{ '--columns': piece.gridColumn, '--rows': piece.gridRow }} 
            className={style['preview-piece']}
          >
            {piece.shape.map((row, y) => 
              row.map((cellValue, x) => {
                const typeClass = cellValue !== '' ? `cell-${cellValue}` : '';
                return (
                  <div key={`${y}-${x}`} className={`${style['cell']} ${style[typeClass]}`}></div>
                );
              })
            )}
          </div>
        ))}
      </div>
    </div>
  ); 
}

function PlayField({board, activePiece}) {
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

  console.log(displayedBoard);

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
  const [activePiece, nextQueue, board] = useTetris();

  return (
    <div className={style['battle-view-container']}>
      <div className={style['chat-container']}>
        <header>Chatboard</header>
        <section>Chatbox</section>
        <section>Chat message</section>
      </div>
      <div className={style['tetris-board-container']}>
        <div className={style['hold-box']}></div>
        <PlayField board={board} activePiece={activePiece} />
        <QueueBox nextQueue={nextQueue} />
      </div>
      <div className={style['opponents-view-container']}>Opponents Container</div>
    </div>
  );
}

export default BattleView;
