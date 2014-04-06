var start_state = {
  create: function() {
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    space_key.onDown.add(this.start, this);

    var style = { font: "30px Arial", fill: "#ffffff" };
    var x = game.world.width/2, y = game.world.height/2;
    var text = this.game.add.text(x, y-50, "ADVENTURE CATS\nPress space to start", style);
    text.anchor.setTo(0.5, 0.5);
  },

  start: function() {
    this.game.state.start("level_1");
  }

};
