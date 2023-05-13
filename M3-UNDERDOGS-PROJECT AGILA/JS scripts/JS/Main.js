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
    scene:[MenuScene, Instrucstion, CreditScene, GameScene, GameScene2,GameOverScene]
  };

  var game = new Phaser.Game(config);

  function collectSticks(){}
  function collectFeathers(){}
  function collectFood(){}
  
  function lose(player,grass){
    this.physics.pause();

    player.anims.play('idle');

    this.scene.start('GameOverScene');


  }