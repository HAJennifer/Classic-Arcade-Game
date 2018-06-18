'use strict;'
// Enemies our player must avoid
var score = 0;
document.getElementById('playerScore').innerHTML = score;
class Enemy{

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
       constructor(x, y, speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.sprite = 'images/enemy-bug.png';
    }
        

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
  update(dt) {
    this. x+= this.speed*dt;
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }
         
     // Check for collision
   if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
		score = 0;
		document.getElementById('playerScore').innerHTML = score;
		player.reset();
    }
    };
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor(x, y, speed) {
    this.x = 200;
    this.y = 380;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
}

update(dt) {
if (player.y < 20) {
	score++;
	document.getElementById('playerScore').innerHTML = score;
	this.reset();
}
};

render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

handleInput(keyPress) {

    switch (keyPress) {
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'right':
            this.x += this.speed + 50;
            break;
        case 'down':
            this.y += this.speed + 30;
            break;
    }

};
};
reset() {
    this.x = 200;
    this.y = 320;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-90, 60);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-290, 230);
var enemy4 = new Enemy(-390, 140);
var enemy5 = new Enemy(-490, 60);
var enemy6 = new Enemy(-890, 230);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
