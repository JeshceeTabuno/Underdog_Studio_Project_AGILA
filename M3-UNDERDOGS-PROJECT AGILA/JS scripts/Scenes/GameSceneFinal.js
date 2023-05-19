var player3
var forest
var foodsStack
var FoodscoreText
var score
var FoodCollect = 0;
var gameover = false;
var victory = false;


//Platforms
var branch
var mushroom
var bush
var cloud

//sound
var lvl3BGM
var munch
//controls
var cursors

class GameSceneFinal extends Phaser.Scene {
    constructor() {
        super('GameSceneFinal');
        this.musicPlayed=false;
    }

    preload() {

        //Aduio
        this.load.audio('lvl3BGM','Assets/Sounds/Music/Trick House.mp3');
        this.load.audio('Munch','Assets/Sounds/SFX/CollectStar.wav');




        this.load.image("lvl3", "Assets/Images/Backgrounds/levelthreebackground.png");

        // Player
        this.load.spritesheet('eagle', 'Assets/Images/Others/PHEagle.png', {
            frameWidth: 50,
            frameHeight: 48,
        });

        //Platforms
        this.load.image("backg", "Assets/Images/Others/rain.png");
        this.load.image("food", "Assets/Images/Others/Meat.png");
        this.load.image("plat1", "Assets/Images/Others/PlatformL3.png");
        this.load.image("platT2", "Assets/Images/Others/PlatformL2.png");
        this.load.image("platT1", "Assets/Images/Others/PlatformL1.png");
        this.load.image("plat4", "Assets/Images/Others/PlatformL4.png");
        this.load.image("plat5", "Assets/Images/Others/PlatformL5.png");
        this.load.image("plat6", "Assets/Images/Others/PlatformL6.png");
        this.load.image("plat7", "Assets/Images/Others/PlatformL8.png");
        //Player

        //Objects
    }
    create() {
          //Stoping cutscene 2 music
    if(CSBGM3 && CSBGM3.isPlaying){
        CSBGM3.stop();   
}


    this.lvl3BGM = this.sound.add('lvl3BGM');
    this.lvl3BGM.loop=true;
    this.lvl3BGM.play();
    this.lvl3BGM.setVolume(0.3);
    


    //Music
   

        munch=this.sound.add('Munch')

        this.add.image(0, 0, 'lvl3').setOrigin(0).setScrollFactor(1);

        //platforms
        branch = this.physics.add.staticGroup();
        //upper
        branch.create(800, 400, "platT2")
        branch.create(400, 300, "platT1")
        branch.create(1000, 250, "platT2")
        

        //mid

        //lower
        branch.create(110, 550, 'platT1').setScale(1).refreshBody();

        //mushroom
        mushroom = this.physics.add.staticGroup();
        mushroom.create(1150, 550, 'platT2').setScale(1).refreshBody();
        mushroom.create(550, 500, 'platT2').setScale(1).refreshBody();

        //Grass
        cloud = this.physics.add.staticGroup();
        cloud.create(50, 610, 'plat7')
        cloud.create(150, 610, 'plat7')
        cloud.create(300, 610, 'plat7')
        cloud.create(450, 610, 'plat7')
        cloud.create(600, 610, 'plat7')
        cloud.create(750, 610, 'plat7')
        cloud.create(900, 610, 'plat7')
        cloud.create(1030, 610, 'plat7')

        //player
        player3 = this.physics.add.sprite(900, 400);
        player3.setBounce(0.2);
        player3.setCollideWorldBounds(true);
        player3.body.gravity.y = 350;
        player3.setScale(1.9);


        //The player animations, turning, walking left and walking right.
        forest = this.add.tileSprite(0, 0, 5000, 5000, 'backg');
        forest.setScale(0.5);


        // 2-minute countdown timer
        let timer = this.time.addEvent({
            delay: 120000, // 2 minutes in milliseconds
            callback: this.onTimerComplete,
            callbackScope: this,
            loop: false
        });


        // Display timer text
        let timerText = this.add.text(32, 32, '', { font: '32px Arial', fill: '#000000' });
        timerText.setOrigin(-3.2, 0)
        timerText.setScrollFactor(0);
        timerText.setText('Time: 2:00');

        // Update timer text every second
        this.time.addEvent({
            delay: 1000, // 1 second
            callback: () => {
                let remainingTime = Math.floor(timer.getRemainingSeconds());
                let minutes = Math.floor(remainingTime / 60);
                let seconds = remainingTime % 60;
                timerText.setText(`Time: ${minutes}:${seconds.toString().padStart(2, '0')}`);
            },
            callbackScope: this,
            loop: true
        });


        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('eagle', { start: 3 }),
            frameRate: 0,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('eagle', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('eagle', { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();
        FoodscoreText = this.add.text(16, 16, "Food Collected: 0", {
            fontSize: "32px",
            fill: "black",
        });

        //foods
        foodsStack = this.physics.add.group({
            key: 'food',
            repeat: 16,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        foodsStack.children.iterate(function (child) {
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.body.gravity.y = 300;
            child.setScale(0.07);

        });



        //collider
        this.physics.add.collider(player3, branch);
        this.physics.add.collider(player3, mushroom)
        this.physics.add.collider(foodsStack, branch);
        this.physics.add.collider(foodsStack, mushroom);
        this.physics.add.collider(foodsStack, mushroom);

        ;

        this.physics.add.collider(player3, cloud, fall, null, this);

        this.physics.add.overlap(player3, foodsStack, collectFood, null, this);

    }
    onTimerComplete() {
        gameover = true;
    }

    update() {
        if (victory) {
            this.scene.start('VictoryScene');

        }
        if (gameover) {
            this.lvl3BGM.stop();
            this.scene.start('GameOverScene3');
        }
        forest.tilePositionY -= 4;
        //Moving the sprite
        if (cursors.left.isDown) {
            player3.setVelocityX(-200);
            player3.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player3.setVelocityX(200);
            player3.anims.play('right', true);
        } else {
            player3.setVelocityX(0);
            player3.anims.play('idle', true);
        }

        if (cursors.up.isDown && player3.body.touching.down) {
            player3.setVelocityY(-350);
        }

    }

}
function collectFood(player3, foods) {

    foods.disableBody(true, true);

    munch.play();
    munch.setVolume(0.3);

    FoodCollect += 1;
    FoodscoreText.setText("Food Collected: " + FoodCollect);

    if(FoodCollect == 30) {
        this.lvl3BGM.stop();
        victory = true;
    }

    if (foodsStack.countActive(true) === 0) {
        // All stars have been collected, create a new batch
        foodsStack.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.body.gravity.y = 300;
        });
    }

}

 