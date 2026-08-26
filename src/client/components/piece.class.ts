const TETROMINO_SHAPES = {
  I: [[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],
  J: [[1,0,0], [1,1,1], [0,0,0]],
  L: [[0,0,1], [1,1,1], [0,0,0]],
  O: [[1,1], [1,1]],
  S: [[0,1,1], [1,1,0], [0,0,0]],
  T: [[0,1,0], [1,1,1], [0,0,0]],
  Z: [[1,1,0], [0,1,1], [0,0,0]],
}

const COLOR_PALETTE = [
  '#00f0f0', // Cyan
  '#0000f0', // Blue
  '#f0a000', // Orange
  '#f0f000', // Yellow
  '#00f000', // Green
  '#a000f0', // Purple
  '#f00000', // Red
];

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
