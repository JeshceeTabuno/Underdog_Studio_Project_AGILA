class CutScene2 extends Phaser.Scene{
    constructor(){
        super('CutScene2');
    }

    preload(){
        this.load.image("CUT2", "Assets/Images/Backgrounds/levelonebackground.png");

        this.load.image("CSC2", "Assets/Images/Buttons/Continue.png");

        this.load.image("CSB2", "Assets/Images/Buttons/back.png");
    }
    create(){
        this.add.image(0, 0, 'CUT2').setOrigin(0).setScrollFactor(1);

        let continueButton = this.add.image(1000,500, 'CSC2').setScale(1);
        continueButton.setInteractive();
        continueButton.on('pointerdown',() => {this.scene.start('GameScene2')});

        let backButton = this.add.image(200,500, 'CSB2').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}