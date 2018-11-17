export class Player {
    constructor(context, data){
        this.self = this.GenerateObjectWithPhysics(context, data.Sprite);
        this.cursors = context.input.keyboard.createCursorKeys();
    }

    GenerateObjectWithPhysics(context, Sprite){
        let self = context.physics.add.sprite(100,50, Sprite);
        self.setBounce(0.2);
        self.setCollideWorldBounds(true);
        return self;
    }

    SetColliders(context, data){
        context.physics.add.collider(data.self, data.collider);
    }

    CreateAnims(context, anims, SpritesheetData){
        anim = anims.create({
            key: SpritesheetData.Key,
            frames: anims.generateFrameNumbers(SpritesheetData.Sprite, 
                {start: SpritesheetData.StartFrame, end: SpritesheetData.EndFrame}),
            frameRate: SpritesheetData.frameRate,
            repeat: SpritesheetData.Repeat
        });
    }

    Update(){
        if(this.cursors.left.isDown){
            this.self.setVelocityX(-150);
        }else if(this.cursors.right.isDown){
            this.self.setVelocityX(150);
        }else{
            this.self.setVelocityX(0);
        }
    }

}