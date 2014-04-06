var level_1 = {
  platforms:null,
  player:null,
  feathers:null,
  collected:0,
  scoreText:null,

  create: function() {
    this.scoreText = game.add.text(16, 16, '0', { fontSize: '32px', fill: '#fff' });
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#00bfff';
    cursors = game.input.keyboard.createCursorKeys();
    spacebar.onDown.add(this.jump, this);
    cursors.up.onDown.add(this.jump, this);

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

    player = game.add.sprite(32, game.world.height - 190, 'cat1');
    game.physics.arcade.enable(player);

    // player.body.bounce.y = 0.2;
    player.body.gravity.y = 320;
    player.body.collideWorldBounds = true;

    feathers = game.add.group();
    feathers.enableBody = true;
    for (var i = 0; i < 12; i++)
    {
      var feather = feathers.create(i * 70, 0, 'feather');
      feather.body.gravity.y = 6;
      feather.body.velocity.x = 0.01;
      feather.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

  },

  update: function() {
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(feathers, platforms);
    game.physics.arcade.overlap(player, feathers, this.collectFeather, null, this);

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
  },

  collectFeather: function(player, feather) {
    this.collected += 1;
    if (this.collected == 12) {
      this.scoreText.setText(':-)');
    } else {
      this.scoreText.setText(this.collected);
    }
    feather.kill();
  },

  jump: function() {
    if (player.body.touching.down) {
      player.body.velocity.y = -370;
    }
  }


};
