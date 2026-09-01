class TetrisBoard {
  constructor(width = 10, height = 20) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => Array(width).fill(0));
    this.activePiece = null;
  }

  moveActivePieceLeft(): void {
    if (!this.activePiece) return ;
    if (this.checkCollision()) return ;
    this.activePiece.moveLeft();
  }

  moveActivePieceRight(): void {
    if (!this.activePiece) return ;
    if (this.checkCollision()) return ;
    this.activePiece.moveRight();
  }

  moveActivePieceDown(): void {
    if (!this.activePiece) return ;
    if (this.checkCollision()) return ;
    this.activePiece.moveDown();
  }
}

export default TetrisBoard;
