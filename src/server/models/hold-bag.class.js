import TETROMINOS from 'tetrominos.constant'

class HoldBag {
  #canSwap = true;
  #pieceType = null;

  get canSwap() {
    return this.#canSwap;
  }

  swap(pieceType) {
    const returnedPiece = this.#pieceType;

    this.#pieceType = pieceType;
    this.#canSwap = false;
    return (returnedPiece)
  }

  resetCanSwap() {
    this.#canSwap = true;
  }

  peekHoldPiece() {
    return (this.#pieceType ? TETROMINOS[this.#pieceType].preview : null);
  }
}

export default HoldBag;
