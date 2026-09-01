class Piece {
  constructor(type) {
    this.type = type;
    this.shape = TETROMINO_SHAPES[this.type];
    this.color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];


    this.x = 3;
    this.y = 0;
  }

  rotate() {
    this.shape = this.shape[0].map((_, colIndex) => {
      return (this.shape.map(row => {
        return (row[colIndex].reserve());
      }));
    });
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  moveDown() {
    this.y += 1;
  }
}
