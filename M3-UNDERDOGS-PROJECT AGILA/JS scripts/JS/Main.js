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
  scene:[MenuScene, Instrucstion, CreditScene, GameScene, GameScene2, CutScene1 , CutScene2, CutScene3,GameOverScene,GameOverScene2]
};

var game = new Phaser.Game(config);

//level 1

function collectStick(player,stick){
 stick.destroy();

 chop.play();
 chop.setVolume(0.3);

  StickCollect +=1;
  sticksCollectText.setText("Stick Collected: " + StickCollect);

  if (StickCollect >= 2){
    
    this.scene.start('CutScene2');
    lvl1BGM.stop();
  }

  
}

//level 2

function collectFeathers(player, feather) {
  wind.play()
  wind.setVolume(0.3)
  featherCollected = true;
  feather.x = Phaser.Math.Between(100, 1100);
  feather.y = Phaser.Math.Between(50, 550);


  featherCollect +=1;
  featherText.setText("Feathers: "+featherCollect);

  if(featherCollect >=2){
    this.scene.start('CutScene3');
    this.lvl2BGM.stop();
  }
}



function getRandomX() {
  // Returns a random X position that is at least 500 pixels away from the player
  var minX = 100;
  var maxX = 1100;
  return Phaser.Math.Between(minX, maxX);
}

function getRandomY() {
  // Returns a random Y position anywhere in the game world
  return Phaser.Math.Between(50, 550);
}





//Level 3
function collectFood(){}



//Lose functions

function lose(player,grass){
  this.physics.pause();

  player.anims.play('idle');

  this.scene.start('GameOverScene');


}

