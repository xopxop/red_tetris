import TETROMINOS from './tetrominos.constant';

class ActivePiece {
  #matrix;
  #type;
  #x;
  #y;

  constructor(type, boardLength = 10) {
    this.#matrix = TETROMINOS[type].matrix;
    this.#x = Math.floor((boardLength - maxtrix[0].length) / 2);
    this.#y = 0;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  get matrix() {
    return this.#matrix;
  }

  set matrix(matrix) {
    this.#matrix = matrix;
  }

  get x() {
    return this.#x;
  }

  set x(x) {
    this.#x = x;
  }

  get y() {
    return this.#y;
  }

  set y(y) {
    this.#y = y;
  }

  ghostPiece(x = null, y = null, matrix = null) {
    return ({
      x: (x !== null) ? x : this.x,
      y: (y !== null) ? y : this.y,
      matrix: (matrix !== null) ? matrix : this.matrix
    });
  }
}

export default ActivePiece;
