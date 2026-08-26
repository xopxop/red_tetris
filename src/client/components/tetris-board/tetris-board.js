import './tetris-board.css'

const TetrisBoard = ({ board }) => {
  return (
    <div className="tetris-board">
      {board.map((row, rowIndex) =>
        row.map((cellValue, colIndex) => {
          const cellClass = cellValue ? `cell ${cellValue}` : 'cell';
          return (
            <div key={`${rowIndex}-${colIndex}`} className={cellClass} />
          );
        }))
      }
    </div>
  );
}

export default TetrisBoard;
