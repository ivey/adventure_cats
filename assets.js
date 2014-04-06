var assets_state = {
  preload: function() {
    this.game.stage.backgroundColor = '#ff1493';
    this.game.load.image('cat1','images/cat1.png');
    this.game.load.image('feather','images/feather.png');
    this.game.load.image('ground', 'images/ground.png');
    this.game.load.image('block', 'images/block.png');
  },

  create: function() {
    this.game.state.start('start');
  }
};
