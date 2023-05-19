class CreditScene extends Phaser.Scene{
    constructor(){
        super('CreditScene');
    }

    preload(){

        this.load.image("CBG", "Assets/Images/Backgrounds/levelonebackground.png");

        this.load.image("back", "Assets/Images/Buttons/back.png");
        
        this.load.image('Tabuno','Assets/Images/Others/Jeshcee Tabuno.png')
        this.load.image('Debbi','Assets/Images/Others/Debbi.png')
        this.load.image('Abaya','Assets/Images/Others/Mark Abaya.png')
        this.load.image('Eugene','Assets/Images/Others/Eugene.png')
    }
    create(){

        if(MBGM && !MBGM.isPlaying){
            MBGM.play();
        }


        this.add.image(0, 0, 'CBG').setOrigin(0).setScrollFactor(1);
        //Tabuno
        let tabunoButton = this.add.image(140,100, 'Tabuno');
            tabunoButton.setInteractive();
        let tabunoText = this.add.text(20,150,'Jeshcee Jay Tabuno',{font: '25px Arial', fill:'White' })
            tabunoText.setInteractive({userHandCursor:true});

        let tabunoText1 = this.add.text(80,180,'(Leader)',{font: '25px Arial', fill:'White' })
            tabunoText1.setInteractive({userHandCursor:true});

        let tabunoText2 = this.add.text(70,220,'(Programer)',{font: '25px Arial', fill:'White' })
            tabunoText2.setInteractive({userHandCursor:true});

        //Getigan
        let GetiganButton = this.add.image(430,100, 'Debbi');
            GetiganButton.setInteractive();
        let GetiganText = this.add.text(290,150,'Debbie Laurente Getigan',{font: '25px Arial', fill:'White' })
            GetiganText.setInteractive({userHandCursor:true});

        let GetiganText1 = this.add.text(400,180,'(Artist)',{font: '25px Arial', fill:'White' })
            GetiganText1.setInteractive({userHandCursor:true});
        
        let GetiganText2 = this.add.text(360,220,'(Video Editor)',{font: '25px Arial', fill:'White' })
            GetiganText2.setInteractive({userHandCursor:true});

        //Abaya
        let AbayaButton = this.add.image(700,100, 'Abaya');
            AbayaButton.setInteractive();
        let AbayaText = this.add.text(630,150,'Mark Abaya',{font: '25px Arial', fill:'White' })
            AbayaText.setInteractive({userHandCursor:true});
        
        let AbayaText1 = this.add.text(660,180,'(Artist)',{font: '25px Arial', fill:'White' })
            AbayaText1.setInteractive({userHandCursor:true});
        //Flores
        let FloresButton = this.add.image(940,100, 'Eugene');
            FloresButton.setInteractive();
        let FloresText = this.add.text(840,150,'Eugene Flores II',{font: '25px Arial', fill:'White' })
            FloresText.setInteractive({userHandCursor:true});
        
        let FloresText1 = this.add.text(860,180,'(Programer)',{font: '25px Arial', fill:'White' })
            FloresText1.setInteractive({userHandCursor:true});
        let FloresText2 = this.add.text(850,220,'(Video Editor)',{font: '25px Arial', fill:'White' })
            FloresText2.setInteractive({userHandCursor:true});




        let backButton = this.add.image(200,500, 'back').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}