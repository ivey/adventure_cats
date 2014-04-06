var start_state = {
  create: function() {
    spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spacebar.onDown.add(this.start, this);

    var style = { font: "30px Arial", fill: "#ffffff" };
    var x = game.world.width/2, y = game.world.height/2;
    var text = this.game.add.text(x, y-50, "ADVENTURE CATS\nPress space to start", style);
    text.anchor.setTo(0.5, 0.5);
  },

  start: function() {
    spacebar.onDown.remove(this.start, this);
    this.game.state.start("level_1");
  }

};
