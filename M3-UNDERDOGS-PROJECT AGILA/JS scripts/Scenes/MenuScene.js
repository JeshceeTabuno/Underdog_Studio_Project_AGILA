var MBGM;


class MenuScene extends Phaser.Scene{
    constructor(){
        super('MenuScene');
        this.musicPlayed=false;
    }

    preload(){
        //BackGround Music
    this.load.audio('MBGM','Assets/Sounds/Music/Pokémon Sun & Moon - Welcome to the Alola Region Music (HQ).mp3');
        //BG
    this.load.image("MBG", "Assets/Images/Backgrounds/levelonebackground.png");
    
    this.load.image("Play", "Assets/Images/Buttons/play.png");
    this.load.image("Credits", "Assets/Images/Buttons/credits.png");
    this.load.image("Exit", "Assets/Images/Buttons/quit.png");
    this.load.image("help", "Assets/Images/Buttons/help.png");
    }
    create(){
    if(!this.musicPlayed){
    MBGM = this.sound.add('MBGM');
        MBGM.loop=true;
        MBGM.play();
        MBGM.setVolume(0.3);
        this.musicPlayed=true;
    }

    if(MBGM && !MBGM.isPlaying){
        MBGM.play();
    }

    //cutScenes
    if(CSBGM && CSBGM.isPlaying){
        CSBGM.stop();
    }

     
     if(CSBGM2 && CSBGM2.isPlaying){
        CSBGM2.stop();
    }

    if(CSBGM3 && CSBGM3.isPlaying){
        CSBGM3.stop();
    }

    //gameover stop music

    if(EndMusic && EndMusic.isPlaying){
        EndMusic.stop();
    }
    
    if(EndMusic2 && EndMusic2.isPlaying){
        EndMusic2.stop();
    }
   




    //Gamescene stop music
    if(lvl1BGM && lvl1BGM.isPlaying){
        lvl1BGM.stop();
    }



    this.add.image(0, 0, 'MBG').setOrigin(0).setScrollFactor(1);

    let playButton = this.add.image(630,250, 'Play').setScale(2);
    playButton.setInteractive();
    playButton.on('pointerdown',() => {this.scene.start('CutScene1')});

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