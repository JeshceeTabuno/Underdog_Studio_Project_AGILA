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
    scene:[MenuScene, Instrucstion, CreditScene, GameScene2, GameScene]
  };

  var game = new Phaser.Game(config);