var CSBGM2;
class CutScene2 extends Phaser.Scene{
    constructor(){
        super('CutScene2');
        this.musicPlayed=false;
    }

    preload(){
        this.load.audio('CSBGM2','Assets/Sounds/Music/Survey Results (Night) - Pokémon Legends- Arceus (Gamerip).mp3');
        this.load.image("CUT2", "Assets/Images/Backgrounds/partTwo.png");

        this.load.image("CSC2", "Assets/Images/Buttons/Continue.png");

        this.load.image("CSB2", "Assets/Images/Buttons/back.png");
    }
    create(){
        //Music
      
            CSBGM2 = this.sound.add('CSBGM2');
            CSBGM2.loop=true;
            CSBGM2.play();
            CSBGM2.setVolume(0.3);

            this.musicPlayed=true;
    
            



        this.add.image(0, 0, 'CUT2').setOrigin(0).setScrollFactor(1);

        let continueButton = this.add.image(1140,400, 'CSC2').setScale(1);
        continueButton.setInteractive();
        continueButton.on('pointerdown',() => {this.scene.start('GameScene2')});

        let backButton = this.add.image(80,400, 'CSB2').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}