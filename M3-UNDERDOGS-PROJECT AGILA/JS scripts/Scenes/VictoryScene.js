class VictoryScene extends Phaser.Scene {
    constructor() {
        super('VictoryScene');
    }

    preload() {
        this.load.image("ENDBG", "Assets/Images/Backgrounds/levelonebackground.png");
        this.load.image("Credits1", "Assets/Images/Buttons/credits.png");
        this.load.image("OverB", "Assets/Images/Buttons/back.png");
        this.load.image("Restart", "Assets/Images/Buttons/replay.png");
        this.load.image("Vic", "Assets/Images/Others/victory.png");
        this.load.image("Trop", "Assets/Images/Others/trophy.png");
    }
    create() {

        this.add.image(0, 0, 'ENDBG').setOrigin(0).setScrollFactor(1);
        this.add.image(600, 300, 'Trop').setScale(0.2);
        

        let gameOverText1 = this.add.image(600, 100, 'Vic');
        gameOverText1.setInteractive({ userHandCursor: true });

        let creditButton1 = this.add.image(600, 500, 'Credits1').setScale(1.5);
        creditButton1.setInteractive();
        creditButton1.on('pointerdown', () => { this.scene.start('CreditScene') });



        let backButton = this.add.image(200, 500, 'OverB').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown', () => { this.scene.start('MenuScene') });


    }
}