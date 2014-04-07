var assets_state = {
  preload: function() {
    game.stage.backgroundColor = '#ff1493';
    game.load.image('cat1','images/cat1.png');
    game.load.image('feather','images/feather.png');
    game.load.image('ground', 'images/ground.png');
    game.load.image('block', 'images/block.png');
  },

  create: function() {
    game.state.start('start');
  }
};
