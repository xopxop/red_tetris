import Board from './models/board.class';
import ActivePiece from './models/active-piece.class';
import NextBag from './models/next-bag.class';
import HoldBag from './models/hold-bag.class';

class Game {
  #board;
  #nextBag;
  #holdBag;
  #activePiece;

  // need constructor
  constructor() {
    this.#board = new Board();
    this.#nextBag = new NextBag();
    this.#holdBag = new HoldBag();
    this.#activePiece = new ActivePiece(this.#nextBag.drawNextPiece());
  }

  #onArrowLeftKeyPressed() {
    const ghostPiece = this.#activePiece.ghostPiece(this.#activePiece.x - 1, null, null);
    
    if (this.#board.collision(ghostPiece)) return;

    this.#activePiece.x -= 1;
  }

  #onArrowRightKeyPressed() {
    const ghostPiece = this.#activePiece.ghostPiece(this.#activePiece.x + 1, null, null);

    if (this.#board.collision(ghostPiece)) return;

    this.#activePiece.x += 1;
  }

  #onArrowDownKeyPressed() {
    const ghostPiece = this.#activePiece.ghostPiece(null, this.#activePiece.y + 1, null);

    if (this.#board.collision(ghostPiece)) {
      this.#board.lockAndClearRows(this.#activePiece);
      this.#activePiece = new ActivePiece(this.#nextBag.drawNextPiece());
      this.#holdBag.resetCanSwap();
      return;
    }

    this.#activePiece.y += 1;
  }

  #onArrowUpKeyPressed() {
    const rotatedMatrix = this.#activePiece.matrix[0].map((_, colIndex) =>
      this.#activePiece.matrix.map(row => row[colIndex]).reverse()
    );
    const ghostPiece = this.#activePiece.ghostPiece(null, null, rotatedMatrix);

    if (this.#board.collision(ghostPiece)) return;

    this.#activePiece.matrix = ghostPiece.matrix;
  }

  #onSpaceKeyPressed() {
    const hardDropY = this.#board.getHardDropYPosition(this.#activePiece);

    if (this.#activePiece.y != hardDropY) {
      this.#activePiece.y = hardDropY;
    }

    this.#board.lockAndClearRows(this.#activePiece);
    this.#activePiece = new ActivePiece(this.#nextBag.drawNextPiece());
    this.#holdBag.resetCanSwap();
  }

  #onShiftKeyPressed() {
    if(!this.#holdBag.canSwap) return;

    const swappedPieceType = this.#holdBag.swap(this.#activePiece.type);

    if (swappedPieceType) {
      this.#activePiece = new ActivePiece(swappedPieceType);
    } else {
      this.#activePiece = new ActivePiece(this.#nextBag.drawNextPiece());
      this.#holdBag.resetCanSwap();
    }
  }

  handleKeyDown(key) {
    switch (key) {
      case 'ArrowLeft': {
        return this.#onArrowLeftKeyPressed();
      };
      case 'ArrowRight': {
        return this.#onArrowRightKeyPressed();
      };
      case 'ArrowUp': {
        return this.#onArrowUpKeyPressed();
      };
      case 'ArrowDown': {
        return this.#onArrowDownKeyPressed();
      };
      case 'Space': {
        return this.#onSpaceKeyPressed();
      };
      case 'Shift': {
        return this.#onShiftKeyPressed();
      };
    };
  }
}

export default Game;
