class CutScene1 extends Phaser.Scene{
    constructor(){
        super('CutScene1');
    }

    preload(){
        this.load.image("CUT1", "Assets/Images/Backgrounds/levelonebackground.png");

        this.load.image("CSC1", "Assets/Images/Buttons/Continue.png");

        this.load.image("CSB1", "Assets/Images/Buttons/back.png");
    }
    create(){
        this.add.image(0, 0, 'CUT1').setOrigin(0).setScrollFactor(1);

        let continueButton = this.add.image(1000,500, 'CSC1').setScale(1);
        continueButton.setInteractive();
        continueButton.on('pointerdown',() => {this.scene.start('GameScene2')});

        let backButton = this.add.image(200,500, 'CSB1').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}