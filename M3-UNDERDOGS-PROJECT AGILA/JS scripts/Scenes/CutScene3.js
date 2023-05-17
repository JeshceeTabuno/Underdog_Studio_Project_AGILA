class CutScene3 extends Phaser.Scene{
    constructor(){
        super('CutScene3');
    }

    preload(){
        this.load.image("CUT3", "Assets/Images/Backgrounds/levelonebackground.png");

        this.load.image("CSC3", "Assets/Images/Buttons/Continue.png");

        this.load.image("CSB3", "Assets/Images/Buttons/back.png");
    }
    
    create(){
        this.add.image(0, 0, 'CUT3').setOrigin(0).setScrollFactor(1);

        let continueButton = this.add.image(1000,500, 'CSC3').setScale(1);
        continueButton.setInteractive();
        continueButton.on('pointerdown',() => {this.scene.start('GameSceneFinal')});

        let backButton = this.add.image(200,500, 'CSB3').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}