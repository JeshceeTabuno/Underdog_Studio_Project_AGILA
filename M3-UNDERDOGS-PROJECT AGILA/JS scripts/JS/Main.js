var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
      },
    },
    scene:[MenuScene, Instrucstion, CreditScene, GameScene, CutScene1 ,GameScene2,GameOverScene]
  };

  var game = new Phaser.Game(config);

  function collectStick(player,stick){
   stick.destroy();

    StickCollect +=1;
    sticksCollectText.setText("Score: " + StickCollect);

    if (StickCollect >= 2){
      
      this.scene.start('CutScene1');
    }

    
  }
  function collectFeathers(){}
  function collectFood(){}
  
  function lose(player,grass){
    this.physics.pause();

    player.anims.play('idle');

    this.scene.start('GameOverScene');


  }