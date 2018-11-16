import {Entity} from '../ECS/Entity';

export class SimpleScene extends Phaser.Scene {

  preload(){
    this.load.image('cokecan', 'assets/sprites/cokecan.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Pedro!', { fill: '#0f0' });
    console.log("eae");
    this.add.image(100,200,'cokecan');
    const entities = [];
    for(let i = 0; i < 15 ; i++){
      let entity = new Entity();
      entity.print();
      entities.push(entity);
    }
  }
}
