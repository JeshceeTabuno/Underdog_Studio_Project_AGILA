var player;

var cursors;


class GameScene2 extends Phaser.Scene{
    constructor(){
        super('GameScene2');
    }

    preload(){
        this.load.image("lvl2", "Assets/Images/Backgrounds/leveltwobackground.png");
    }
    create(){
        //bg
        this.add.image(0, 0, 'lvl2').setOrigin(0).setScrollFactor(1);

        //player
        player = this.physics.add.sprite(230, 400,"");
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
       

        cursors = this.input.keyboard.createCursorKeys();


    }
    update(){
        if(cursors.left.isDown){
            player.setVelocityX(-200);
           } else if(cursors.right.isDown){
            player.setVelocityX(200);
           } else{
            player.setVelocityX(0);
           }
           if(cursors.up.isDown){
            player.setVelocityY(-200);
           }else if(cursors.down.isDown){
            player.setVelocityY(200);
           }else{
            player.setVelocityY(0);
           }
    }
}