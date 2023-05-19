var player

//Platforms
var branch
var mushroom
var grass


var sticks
var sticksCollectText
var StickCollect=0;

var timer
var timerText

//Music & Sounds
var lvl1BGM;
var chop;

//controls
var cursors


class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
        this.musicPlayed=false;
      
    }

    preload(){

    //Sounds
    this.load.audio('lvlBGM','Assets/Sounds/Music/Soda Jungle Overworld - New Super Mario Bros U - Music.mp3');
    this.load.audio('chop','Assets/Sounds/SFX/Tango.mp3.mp3');
    //
        this.load.image("lvl", "Assets/Images/Backgrounds/levelonebackground.png");

    // Player
    this.load.spritesheet('eagle', 'Assets/Images/Others/PHEagle.png', {
        frameWidth: 50,
        frameHeight: 48,
      });

      //sticks
      this.load.image("stick", "Assets/Images/Others/Sticks.png");

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
      //Music
      
        lvl1BGM = this.sound.add('lvlBGM');
            lvl1BGM.loop=true;
            lvl1BGM.play();
            lvl1BGM.setVolume(0.3);
            this.musicPlayed=true;
        

     

        chop= this.sound.add('chop')

        //Stoping cutscene 1 music
        if(CSBGM && CSBGM.isPlaying){
          CSBGM.stop();
      }

      if(EndMusic && EndMusic.isPlaying){
        EndMusic.stop();
    }
    
      this.add.image(0, 0, 'lvl').setOrigin(0).setScrollFactor(1);

  // Timer
  timer = this.time.addEvent({
    delay: 30000,
    callback: this.onTimerComplete,
    callbackScope: this
  });
  timerText = this.add.text(500, 20, 'Time: ', { font: '32px Arial', fill: 'White' });
     

        //platforms
        branch = this.physics.add.staticGroup();
        //upper
        branch.create(800, 440, "plat2")
        branch.create(400, 320, "plat1")
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

        //sticks
        sticks=this.physics.add.staticGroup();
        sticks.create(50,80,'stick').setScale(0.5)
        sticks.create(300,80,'stick').setScale(0.5)

        sticks.create(900,80,'stick').setScale(0.5)
        sticks.create(1100,80,'stick').setScale(0.5)

        sticks.create(300,250,'stick').setScale(0.5)
        sticks.create(500,250,'stick').setScale(0.5)
       
        sticks.create(700,350,'stick').setScale(0.5)
        sticks.create(900,350,'stick').setScale(0.5)

        sticks.create(500,500,'stick').setScale(0.5)
        sticks.create(1100,440,'stick').setScale(0.5)

        StickCollect = 0;
      //Timer
      

        //player
        player = this.physics.add.sprite(200, 400);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.body.gravity.y = 350;
        player.setScale(1.9);
        

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

        sticksCollectText = this.add.text(16, 16, "Sticks Collected: 0", {
            font: "32px Arial",
            fill: "white",
          });


        //collider
        this.physics.add.collider(player, branch);
        this.physics.add.collider(player, mushroom);

        this.physics.add.collider(player, sticks,collectStick,null,this);
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
     player.setVelocityY(-400);

    
   }

   var remainingTime = Math.ceil((timer.delay - timer.getElapsed())/1000);
   timerText.setText('Time: '+ remainingTime);
 
        }

 collectStick(player,sticks){
            sticks.disabledBody(true,true);
        
            StickCollect +=1;
          }

    onTimerComplete(){
      timerText.setText('Time: 0');
      this.scene.start('GameOverScene');
      StickCollect = 0; 
    }

    }