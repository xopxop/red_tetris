import Player from './player.class';

class Game {
  const cols = 10;
  const rows = 20;
  let holdPiece = null;
  let isGameOver = false;
  cost bag = [];
  const board = Array({ length: this.rows }, () => Array(this.cols).fill(''));

  constructor() {}

  generateBag() {}

  holdTheCurrentPiece() {
    if (this.currentPiece) {
      if (this.currentPiece.canHold) {

      }
    } else {

    }
  }
}

export default Game;
