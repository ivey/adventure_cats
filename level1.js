var level_1 = {
  platforms:null,
  player:null,

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#00bfff';
    cursors = game.input.keyboard.createCursorKeys();

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = game.add.tileSprite(0, game.world.height - 64, game.world.width, 64, 'ground');
    platforms.add(ground);
    ground.body.immovable = true;

    var ledge = game.add.tileSprite(game.world.width - 350, 335, 350, 70, 'block');
    platforms.add(ledge);
    ledge.body.immovable = true;
    ledge = game.add.tileSprite(0, 135, 350, 70, 'block');
    platforms.add(ledge);
    ledge.body.immovable = true;
    // ledge = platforms.create(-150, 170, 'dirt');
    // ledge.body.immovable = true;

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
