class CreditScene extends Phaser.Scene{
    constructor(){
        super('CreditScene');
    }

    preload(){

        this.load.image("CBG", "Assets/Images/Backgrounds/levelonebackground.png");

        this.load.image("back", "Assets/Images/Buttons/back.png");
    }
    create(){

        this.add.image(0, 0, 'CBG').setOrigin(0).setScrollFactor(1);

        let backButton = this.add.image(200,500, 'back').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}