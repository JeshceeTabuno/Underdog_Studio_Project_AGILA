var player;

var cursors;


class GameScene2 extends Phaser.Scene{
    constructor(){
        super('GameScene2');
    }

    preload(){
        this.load.image("lvl2", "Assets/Images/Backgrounds/leveltwobackground.png");

        this.load.spritesheet('flyeagle', 'Assets/Images/Others/PHEagleFlying.png', {
            frameWidth: 206,
            frameHeight: 206,
          });
    }
    create(){
        //bg
        this.add.image(0, 0, 'lvl2').setOrigin(0).setScrollFactor(1);

        //player
        player = this.physics.add.sprite(850, 345,"");
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.setScale(0.5);

        //player animation
        this.anims.create({
            key: 'hover',
            frames: this.anims.generateFrameNumbers('flyeagle', {start: 9}),
            frameRate: 0,
            repeat: -1
        });
    
        this.anims.create({
            key: 'flyleft',
            frames: this.anims.generateFrameNumbers('flyeagle', {start: 4, end: 7}),
            frameRate: 5,
            repeat: -1
        });
    
        this.anims.create({
            key: 'flyright',
            frames: this.anims.generateFrameNumbers('flyeagle', {start: 8, end: 11}),
            frameRate: 5,
            repeat: -1
            });
    
            this.anims.create({
                key: 'up',
                frames: this.anims.generateFrameNumbers('flyeagle', {start: 0, end: 3}),
                frameRate: 5,
                repeat: -1
            });
            
            this.anims.create({
                key: 'down',
                frames: this.anims.generateFrameNumbers('flyeagle', {start: 12, end: 15}),
                frameRate: 5,
                repeat: -1
            });  

        
       

        cursors = this.input.keyboard.createCursorKeys();


    }
    update(){
        if(cursors.left.isDown){
            player.setVelocityX(-200);
            player.anims.play('flyleft', true);
            
           } else if(cursors.right.isDown){
            player.setVelocityX(200);
            player.anims.play('flyright', true);
            
           } else{
            player.setVelocityX(0);
            player.anims.play('hover', true);
           
           }
           if(cursors.up.isDown){
            player.setVelocityY(-200);
            player.anims.play('up', true);
           
           }else if(cursors.down.isDown){
            player.setVelocityY(200);
            player.anims.play('down', true);
            
           }else{
           
            player.setVelocityY(0);
            
           }
    }
}