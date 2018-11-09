export class SimpleScene extends Phaser.Scene {

  preload(){
    this.load.image('cokecan', 'assets/sprites/cokecan.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Pedro!', { fill: '#0f0' });
    this.add.image(100,200,'cokecan');
  }
}
