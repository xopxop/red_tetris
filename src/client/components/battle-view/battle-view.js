import { useEffect } from 'react';
import * as style from './battle-view.css';
import useTetris from './hooks/useTetris.hook';

function HoldBox({ piece }) {
  return (
    <div className={style['hold-box']}>
      <span>Hold</span>
      {piece && (
        <div
          style={{ '--columns': piece.columns, '--rows': piece.rows }} 
          className={style['preview-piece']}
        >
          {piece?.matrix.map((row, y) =>
            row.map((cellValue, x) => {
              const typeClass = cellValue !== '' ? `cell-${cellValue}` : '';
              return (
                <div key={`${y}-${x}`} className={`${style['cell']} ${style[typeClass]}`}></div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

function QueueBox({ nextPieces }) {
  return (
    <div className={style['queue-box']}>
      <span>Next</span>
      <div className={style['queue-list']}>
        {nextPieces?.map((piece, pieceIndex) => (
          <div key={pieceIndex}
            style={{ '--columns': piece.columns, '--rows': piece.rows }} 
            className={style['preview-piece']}
          >
            {piece.matrix.map((row, y) => 
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

function PlayField({ displayBoard }) {
  return (
    <div className={style['play-field']}>
      {displayBoard?.map((row, y) => 
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
  const tetris = useTetris();

  useEffect(() => {
    tetris.startGame();

    return () => {
      tetris.stopGame();
    }
  }, [])
 
  return (
    <div className={style['battle-view-container']}>
      <div className={style['chat-container']}>
        <header>Chatboard</header>
        <section>Chatbox</section>
        <section>Chat message</section>
      </div>
      <div className={style['tetris-board-container']}>
        <HoldBox piece={tetris.holdPiece} />
        <PlayField displayBoard={tetris.displayBoard} />
        <QueueBox nextPieces={tetris.nextPieces} />
      </div>
      <div className={style['opponents-view-container']}>Opponents Container</div>
    </div>
  );
}

export default BattleView;
