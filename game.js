var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div');

game.state.add('assets', assets_state);
game.state.add('start', start_state);
game.state.add('level_1', level_1);

game.state.start('assets');
