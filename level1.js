var level_1 = {
  platforms:null,
  player:null,

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#00bfff';
    cursors = game.input.keyboard.createCursorKeys();

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, this.game.world.height - 62, 'dirt');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    var ledge = platforms.create(400, 350, 'dirt');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 170, 'dirt');
    ledge.body.immovable = true;

    player = game.add.sprite(32, game.world.height - 190, 'cat1');
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
  },

  update: function() {
    game.physics.arcade.collide(player, platforms);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
      player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
      player.body.velocity.x = 150;
    }
    else
    {
      // player.animations.stop();
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
      player.body.velocity.y = -350;
    }
  }
};
