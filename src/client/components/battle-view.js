import * as style from './battle-view.css';

const PIECE_CLASSES = [
  '',         // 0: empty cell
  'cell-i',   // 1
  'cell-j',   // 2
  'cell-l',   // 3
  'cell-o',   // 4
  'cell-s',   // 5
  'cell-t',   // 6
  'cell-z'    // 7
];

function PlayField() {
  const board = Array.from({length: 20 }, () => Array.from({length: 10}, () => Math.floor(Math.random() * 8)));
  console.log(board);
  return (
    <div className={style['play-field']}>
      {board.map((row, y) => 
        row.map((cellValue, x) => {
          const typeClass = PIECE_CLASSES[cellValue];
          return (
            <div key={`${y}-${x}`} className={`${style.cell} ${style[typeClass]}`}></div>
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
