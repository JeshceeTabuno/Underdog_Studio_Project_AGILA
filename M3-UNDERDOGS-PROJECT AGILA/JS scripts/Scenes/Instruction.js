class Instrucstion extends Phaser.Scene{
    constructor(){
        super('Instruction');
    }

    preload(){

        this.load.image("IBG", "Assets/Images/Backgrounds/levelonebackground.png");
        this.load.image("Std", "Assets/Images/Others/Sticks.png");
        this.load.image("Std1", "Assets/Images/Others/Feathers.png");
        this.load.image("Std2", "Assets/Images/Others/Meat.png");
        this.load.image("Std3", "Assets/Images/Others/eagleparody.png");
        this.load.image("IB", "Assets/Images/Buttons/back.png");
    }
    create(){
        
        if(MBGM && !MBGM.isPlaying){
            MBGM.play();
        }

        this.add.image(0, 0, 'IBG').setOrigin(0).setScrollFactor(1);

        let level1Text = this.add.text(100, 50, 'Level 1: You have to collect all of the sticks before the time runs out', {
            fontFamily: 'Courier New',
            fontSize: 22,
            color: '#ffffff'
        });
        this.add.image(150, 100, 'Std');

        let level2Text = this.add.text(100, 150, 'Level 2: You have to collect all of the feathers needed before the time runs out', {
            fontFamily: 'Courier New',
            fontSize: 22,
            color: '#ffffff'
        });
        this.add.image(150, 200, 'Std1').setScale(0.5);

        let level3Text = this.add.text(100, 250, 'Level 3: You have to collect all of the meat needed before the time runs out', {
            fontFamily: 'Courier New',
            fontSize: 22,
            color: '#ffffff'
        });
        this.add.image(150, 300, 'Std2').setScale(0.2);
        this.add.image(1000, 450, 'Std3').setScale(0.3);

        let backButton = this.add.image(200,500, 'IB').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}