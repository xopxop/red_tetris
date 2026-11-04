class Board {
  #length;
  #width;
  #matrix;

  constructor(length = 20, width = 10) {
    this.#length = length;
    this.#width = width;
    this.#matrix = Array.from({ length }, () => Array(width).fill(0));
  }

  get dupMatrix() {
    return (this.#matrix.map(row => [...row]));
  }

  displayBoard(activePiece) {
    const displayMatrix = dupMatrix;

    activePiece.matrix.forEach((row, y) => {
      row.ForEach((cell, x) => {
        if (!cell) return;

        displayMatrix[activePiece.y + y][activePiece.x + x] = cell;
      })
    });

    return (displayMatrix);
  }

  lockPieceAndClearRows(pieceToLock) {
    let newMatrix = dupMatrix;

    // Lock Piece
    pieceToLock.matrix.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (!cell) return;

        newMatrix[pieceToLock.y + y][pieceToLock.x + x] = cell;
      });
    });

    // Clear Rows
    const rowIndexesToClear = []

    newMatrix.forEach((row, y) => {
      let toBeClear = true;

      row.forEach((cell) => {
        if (!cell) {
          toBeClear = false;
          return;
        }
      })
      
      if (!toBeClear) return;

      rowIndexesToClear.push(y);
    });

    if (rowIndexesToClear.length) {
      const filteredMatrix = newMatrix.filter((_, index) => rowIndexesToClear.includes(index));
      const emptyRowsMatrix = Array.from({ length: rowIndexesToClear.length }, () => Array(this.#length).fill(0));

      newMatrix = [...emptyRowsMatrix, ... filteredMatrix]
    }

    // Update the matrix
    matrix = newMatrix;
  }

  getHardDropYPosition(activePiece) {
    for(let offsetY = 0; offsetY <= this.#length; offsetY++) {
      const ghostPiece = activePiece.ghostPiece(null, activePiece.y + offsetY, null);

      if (this.colission(ghostPiece)) { 
        return (offsetY ? (activePiece.y + offsetY - 1) : 0) 
      }
    }

    return this.#length - 1;
  }
}
