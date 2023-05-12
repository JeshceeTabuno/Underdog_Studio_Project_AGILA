class Instrucstion extends Phaser.Scene{
    constructor(){
        super('Instruction');
    }

    preload(){

        this.load.image("IBG", "Assets/Images/Backgrounds/levelonebackground.png");

        this.load.image("IB", "Assets/Images/Buttons/back.png");
    }
    create(){

        this.add.image(0, 0, 'IBG').setOrigin(0).setScrollFactor(1);

        let backButton = this.add.image(200,500, 'IB').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}