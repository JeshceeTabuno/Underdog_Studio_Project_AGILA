var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
      },
    },
    scene:[MenuScene, InstrucstionScene, CreditScene]
  };

  var game = new Phaser.Game(config);