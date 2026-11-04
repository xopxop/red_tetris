import TETROMINOS from './tetrominos.constant'

class NextBag {
  static BagSize = 7;
  #queue = [];
  #generateQueue = () => Object.keys(TETROMINOS).sort(() => Math.random() - 0.5);
  #extendQueue = () => this.#queue.push(...this.#generateQueue());

  constructor() {
    this.#extendQueue();
  }

  drawNextPiece() {
    const piece = queue.shift()

    if (queue.length <= this.BagSize) {
      this.#extendQueue();
    }

    return (piece);
  }

  peekNextPieces(count = 3) {
    return (queue.slice(0, count).map(type => TETROMINOS[type].preview));
  }
}

export default NextBag;
