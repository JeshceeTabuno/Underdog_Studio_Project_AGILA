var CSBGM3;

class CutScene3 extends Phaser.Scene{
    constructor(){
        super('CutScene3');
    }

    preload(){
        this.load.audio('CSBGM3','Assets/Sounds/Music/Survey Results (Night) - Pokémon Legends- Arceus (Gamerip).mp3');
        this.load.image("CUT3", "Assets/Images/Backgrounds/partThree.png");

        this.load.image("CSC3", "Assets/Images/Buttons/Continue.png");

        this.load.image("CSB3", "Assets/Images/Buttons/back.png");
    }
    
    create(){

        CSBGM3 = this.sound.add('CSBGM2');
        CSBGM3.loop=true;
        CSBGM3.play();
        CSBGM3.setVolume(0.3);

        this.musicPlayed=true;

        this.add.image(0, 0, 'CUT3').setOrigin(0).setScrollFactor(1);

        let continueButton = this.add.image(1140,400, 'CSC3').setScale(1);
        continueButton.setInteractive();
        continueButton.on('pointerdown',() => {this.scene.start('GameSceneFinal')});

        let backButton = this.add.image(80,400, 'CSB3').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}