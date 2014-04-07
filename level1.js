var level_1 = {
  platforms: Phaser.Group,
  player:    Phaser.Sprite,
  feathers:  Phaser.Group,
  collected: 0,
  scoreText: Phaser.Text,
  timer:     Phaser.Timer,

  create: function() {
    var style = { font: "30px Arial", fill: "#ffffff", align: "center" };
    var x = game.world.width/2, y = game.world.height/2;
    var text = this.game.add.text(x, y-50, "Collect 12 feathers so you can make wings!", style);
    text.anchor.setTo(0.5, 0.5);
    game.time.events.add(Phaser.Timer.SECOND * 3,
                           function() {
                             text.destroy();
                           }, this);

    this.scoreText = game.add.text(16, 16, '0', { fontSize: '32px', fill: '#fff' });
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#00bfff';
    cursors = game.input.keyboard.createCursorKeys();
    spacebar.onDown.add(this.jump, this);
    cursors.up.onDown.add(this.jump, this);

    this.platforms = game.add.group();
    this.platforms.enableBody = true;

    var ground = game.add.tileSprite(0, game.world.height - 64, game.world.width, 64, 'ground');
    this.platforms.add(ground);
    ground.body.immovable = true;

    var ledge = game.add.tileSprite(game.world.width - 350, 335, 350, 70, 'block');
    this.platforms.add(ledge);
    ledge.body.immovable = true;
    ledge = game.add.tileSprite(0, 135, 350, 70, 'block');
    this.platforms.add(ledge);
    ledge.body.immovable = true;

    this.player = game.add.sprite(32, game.world.height - 190, 'cat1');
    game.physics.arcade.enable(this.player);

    // player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 320;
    this.player.body.collideWorldBounds = true;

    this.feathers = game.add.group();
    this.feathers.enableBody = true;
    this.timer = game.time.events.loop(Phaser.Timer.SECOND * 5, this.makeFeather, this);
    this.makeFeather();
  },

  makeFeather: function() {
    if (this.collected < 12) {
      var feather = this.feathers.create((Math.random() * (game.world.width - 10)) + 5, 0, 'feather');
      feather.body.gravity.y = 6;
      feather.body.velocity.x = 0.01;
      feather.body.bounce.y = 0.7 + Math.random() * 0.2;
      game.time.events.add(Phaser.Timer.SECOND * (5 + (3 * Math.random())),
                           function() {
                             if (feather.alive) {
                               feather.kill();
                             }
                           }, this);
    }
  },

  update: function() {
    game.physics.arcade.collide(this.player, this.platforms);
    game.physics.arcade.collide(this.feathers, this.platforms);
    game.physics.arcade.overlap(this.player, this.feathers, this.collectFeather, null, this);

    this.player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
      this.player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
      this.player.body.velocity.x = 150;
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
      this.feathers.destroy();
      game.time.events.remove(this.timer);
    } else {
      this.scoreText.setText(this.collected);
      feather.kill();
    }
  },

  jump: function() {
    if (this.player.body.touching.down) {
      this.player.body.velocity.y = -370;
    }
  }


};
