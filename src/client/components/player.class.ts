class Player {
  constructor(id, name, isHost = false) {
    this.id = id;
    this.name = name;
    this.isHost = isHost;
    this.board = new  TetrisBoard();
  }

  addScore(lines) {
    const points = [0, 100, 300, 500, 800];
    this.score += points[lines] || 0;
  }
}
