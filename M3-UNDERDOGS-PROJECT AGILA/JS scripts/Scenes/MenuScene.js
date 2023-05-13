class MenuScene extends Phaser.Scene{
    constructor(){
        super('MenuScene');
    }

    preload(){

    this.load.image("MBG", "Assets/Images/Backgrounds/levelonebackground.png");
    
    this.load.image("Play", "Assets/Images/Buttons/play.png");
    this.load.image("Credits", "Assets/Images/Buttons/credits.png");
    this.load.image("Exit", "Assets/Images/Buttons/quit.png");
    this.load.image("help", "Assets/Images/Buttons/help.png");
    }
    create(){

    this.add.image(0, 0, 'MBG').setOrigin(0).setScrollFactor(1);

    let playButton = this.add.image(640,250, 'Play').setScale(2);
    playButton.setInteractive();
    playButton.on('pointerdown',() => {this.scene.start('GameScene2')});

    let creditButton = this.add.image(600,500, 'Credits').setScale(1.5);
    creditButton.setInteractive();
    creditButton.on('pointerdown',() => {this.scene.start('CreditScene')});
    
    let instructionButton = this.add.image(150,500, 'help').setScale(1);
    instructionButton.setInteractive();
    instructionButton.on('pointerdown',() => {this.scene.start('Instruction')});

    let exitButton = this.add.image(1100,500, 'Exit');
    exitButton.setInteractive();
    exitButton.on('pointerdown',() => {alert('THANK YOU FOR PLAYING!')});

    }
}