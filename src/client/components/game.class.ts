import Player from './player.class';

class Game {
  player = new Map<number, Player>();
  pieceSequence :string[] = [];
  isStarted : boolean = false;
  
  constructor() {}

  addPlayer(id, name): void {
    const isHost = this.players.length === 0;
    const player = new Player(id, name, isHost);
    this.players.set(id, player);
  }

  removePlayer(id) {
    this.players.delete(id);
  }

  generatePieceSequence(count = 50): void {
    const types = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    for (let i = 0; i < count; i++) {
      this.pieceSequence.push(types[Math.floor(Math.random() * types.length)]);
    }
  }

  start(): void {
    this.isStarted = true;
    this.generatePieceSequence();
    this.players.forEach(player => {
      player.board.spawnPiece(this.pieceSequence[0]);
    });
  }
}

export default Game;
