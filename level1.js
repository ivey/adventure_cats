var level_1 = {
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = '#00bfff';
    this.cursors = this.game.input.keyboard.createCursorKeys();

    platforms = this.game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, this.game.world.height - 62, 'dirt');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    var ledge = platforms.create(400, 400, 'dirt');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'dirt');
    ledge.body.immovable = true;

    player = this.game.add.sprite(32, this.game.world.height - 190, 'cat1');
    this.game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
      player.body.velocity.x = -150;
    }
    else if (this.cursors.right.isDown)
    {
      player.body.velocity.x = 150;
    }
    else
    {
      // player.animations.stop();
    }

    if (this.cursors.up.isDown && player.body.touching.down)
    {
      player.body.velocity.y = -350;
    }
  },

  update: function() {
    this.game.physics.arcade.collide(player, platforms);
  }
};
