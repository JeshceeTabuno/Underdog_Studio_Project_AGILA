var player

//Platforms
var branch
var mushroom
var bush

var grass

//controls
var cursors


class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }

    preload(){
        this.load.image("lvl", "Assets/Images/Backgrounds/levelonebackground.png");

    // Player
    this.load.spritesheet('eagle', 'Assets/Images/Others/PHEagle.png', {
        frameWidth: 50,
        frameHeight: 48,
      });

        //Platforms
        this.load.image("plat1", "Assets/Images/Others/PlatformL3.png");
        this.load.image("plat2", "Assets/Images/Others/PlatformL1.png");
        this.load.image("plat3", "Assets/Images/Others/PlatformL2.png");
        this.load.image("plat4", "Assets/Images/Others/PlatformL4.png");
        this.load.image("plat5", "Assets/Images/Others/PlatformL5.png");
        this.load.image("plat6", "Assets/Images/Others/PlatformL6.png");
        this.load.image("plat7", "Assets/Images/Others/PlatformL8.png");
        //Player

        //Objects
    }
    create(){
        this.add.image(0, 0, 'lvl').setOrigin(0).setScrollFactor(1);

        //platforms
        branch = this.physics.add.staticGroup();
        //upper
        branch.create(800, 400, "plat2")
        branch.create(400, 300, "plat1")
        branch.create(1000, 200, "plat2")
        branch.create(200, 200, "plat3")
       
        //mid

        //lower
        branch.create(200,550,'plat6')

        //mushroom
        mushroom = this.physics.add.staticGroup();
        mushroom.create(990, 550, 'plat5')
        mushroom.create(550, 580, 'plat5')

        //Grass
        grass = this.physics.add.staticGroup();
        grass.create(50,610,'plat7')
        grass.create(150,610,'plat7')
        grass.create(300,610,'plat7')
        grass.create(450,610,'plat7')
        grass.create(600,610,'plat7')
        grass.create(750,610,'plat7')
        grass.create(900,610,'plat7')
        grass.create(1030,610,'plat7')

        //player
        player = this.physics.add.sprite(200, 400);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.body.gravity.y = 350;
        player.setScale(0.9);

          //The player animations, turning, walking left and walking right.

     this.anims.create({
         key: 'idle',
        frames: this.anims.generateFrameNumbers('eagle', {start: 3}),
        frameRate: 0,
         repeat: -1
     });

     this.anims.create({
         key: 'left',
         frames: this.anims.generateFrameNumbers('eagle', {start: 0, end: 2}),
         frameRate: 10,
        repeat: -1
     });

     this.anims.create({
         key: 'right',
         frames: this.anims.generateFrameNumbers('eagle', {start: 4, end: 6}),
         frameRate: 10,
        repeat: -1
         });

        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();


        //collider
        this.physics.add.collider(player, branch);
        this.physics.add.collider(player, mushroom)
        
        ;
        this.physics.add.collider(player, grass,lose,null, this);

    }
update(){
         //Moving the sprite
 if(cursors.left.isDown){
    player.setVelocityX(-200);
     player.anims.play('left', true);
   } else if(cursors.right.isDown){
    player.setVelocityX(200);
     player.anims.play('right', true);
   } else{
    player.setVelocityX(0);
    player.anims.play('idle', true);
   }

   if (cursors.up.isDown && player.body.touching.down) {
     player.setVelocityY(-350);
  }
        }

    }