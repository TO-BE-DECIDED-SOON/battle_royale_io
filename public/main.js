const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  scene: {
    preload,
    create,
    update
  }
};

let player;
let cursors;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
}

function create() {
  player = this.physics.add.sprite(400, 300, 'player');
  player.setCollideWorldBounds(true);

  cursors = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D
  });
}

function update() {
  const speed = 200;
  player.setVelocity(0);

  const up = cursors.up.isDown;
  const down = cursors.down.isDown;
  const left = cursors.left.isDown;
  const right = cursors.right.isDown;

  if (up && left) {
    player.setVelocity(-speed * Math.SQRT1_2, -speed * Math.SQRT1_2);
  } else if (up && right) {
    player.setVelocity(speed * Math.SQRT1_2, -speed * Math.SQRT1_2);
  } else if (down && left) {
    player.setVelocity(-speed * Math.SQRT1_2, speed * Math.SQRT1_2);
  } else if (down && right) {
    player.setVelocity(speed * Math.SQRT1_2, speed * Math.SQRT1_2);
  } else {
    if (up) player.setVelocityY(-speed);
    if (down) player.setVelocityY(speed);
    if (left) player.setVelocityX(-speed);
    if (right) player.setVelocityX(speed);
  }
}
