'use strict;'
// Enemies our player must avoid
var score= 0;
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
    if (this.x > 505) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 223);
    }
         
     // Check for collision
   if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
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
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
}

update(dt) {
 if (this.y > 380) {
        this.y = 380;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }

    // Check for player reaching top of canvas and winning the game
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
	document.getElementById("score").innerHTML +=1;
	
}
};
 

render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
handleInput(keyPress) {
		if (keyPress == 'left') {
			this.x -= 101;
		}
		if (keyPress == 'up') {
			this.y -= 83;
		}
		if (keyPress == 'right') {
			this.x += 101;
		}
		if (keyPress == 'down') {
			this.y += 83;
		}

};
};


var player = new Player(200,380);

var enemy1 = new Enemy(0, 60, 100);
var enemy2 = new Enemy(202, 143, 150);
var enemy3 = new Enemy(101, 226, 90);
var enemy4 = new Enemy(202, 60, 120);
var enemy5 = new Enemy(404, 226, 90);

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];




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
