var VSBGM
class VictoryScene extends Phaser.Scene {
    constructor() {
        super('VictoryScene');
    }

    preload() {
        this.load.audio('VSBGM','Assets/Sounds/Music/Survey Results (Night) - Pokémon Legends- Arceus (Gamerip).mp3');


        this.load.image("VScene", "Assets/Images/Backgrounds/ending.png");

       

        this.load.image("VSB", "Assets/Images/Buttons/Continue.png");
    }
    create() {

        VSBGM = this.sound.add('VSBGM');
        VSBGM.loop=true;
        VSBGM.play();
        VSBGM.setVolume(0.3);

        this.musicPlayed=true;

        this.add.image(0, 0, 'VScene').setOrigin(0).setScrollFactor(1);


        let backButton = this.add.image(1100,500, 'VSB').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});


    }
}