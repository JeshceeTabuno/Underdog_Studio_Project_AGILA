var CSBGM;

class CutScene1 extends Phaser.Scene{
    constructor(){
        super('CutScene1');
        this.musicPlayed=false;
    }

    preload(){
    //BackGround Music
    this.load.audio('CSBGM','Assets/Sounds/Music/Survey Results (Night) - Pokémon Legends- Arceus (Gamerip).mp3');
    
        this.load.image("CUT1", "Assets/Images/Backgrounds/partOne.png");

        this.load.image("CSC1", "Assets/Images/Buttons/Continue.png");

        this.load.image("CSB1", "Assets/Images/Buttons/back.png");
    }
    create(){
        //Music
        MBGM.stop()

        
            CSBGM = this.sound.add('CSBGM');
            CSBGM.loop=true;
            CSBGM.play();
            CSBGM.setVolume(0.3);

            this.musicPlayed=true;
    
            
        

   

        //BG
        this.add.image(0, 0, 'CUT1').setOrigin(0).setScrollFactor(1);

        let continueButton = this.add.image(1140,550, 'CSC1').setScale(1);
        continueButton.setInteractive();
        continueButton.on('pointerdown',() => {this.scene.start('GameScene')});

        let backButton = this.add.image(80,550, 'CSB1').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}