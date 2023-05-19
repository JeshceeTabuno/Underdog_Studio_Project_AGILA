var EndMusic;

class GameOverScene extends Phaser.Scene{
    constructor(){
        super('GameOverScene');
        this.musicPlayed=false;

    }

    preload(){
        this.load.audio('EndMusic','Assets/Sounds/Music/Game Over - Pokémon Legends_ Arceus (Gamerip).wav');

        this.load.image("ENDBG", "Assets/Images/Backgrounds/levelonebackground.png");
        this.load.image("OverB", "Assets/Images/Buttons/back.png");
        this.load.image("Restart", "Assets/Images/Buttons/replay.png");
    }
    create(){

      

        EndMusic = this.sound.add('EndMusic');
            EndMusic.play();
            EndMusic.setVolume(0.3);


        if( lvl1BGM && lvl1BGM.isPlaying){
            lvl1BGM.stop();
            }

    

        this.add.image(0, 0, 'ENDBG').setOrigin(0).setScrollFactor(1);

        let gameOverText = this.add.text(450,100, 'GAME OVER!',{font: '50px Arial', fill: "Red"});
        gameOverText.setInteractive({userHandCursor: true});

        let restartButton = this.add.image(600,300, 'Restart').setScale(2);
        restartButton.setInteractive();
        restartButton.on('pointerdown',() => {this.scene.start('GameScene')});



        let backButton = this.add.image(200,500, 'OverB').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});


    }
}