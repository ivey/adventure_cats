var assets_state = {
  preload: function() {
    this.game.stage.backgroundColor = '#00f';
    // this.game.load.image('key','path/');
  },

  create: function() {
    this.game.state.start('start');
  }
};
