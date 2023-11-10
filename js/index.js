// main.js

let player;
let lanes = [];
let logs = [];
let gameOver = false;

function setup() {
  createCanvas(600, 600);
  player = new Player();

  for (let i = 0; i < 15; i++) {
    if (i === 0 || i === 10 || i === 14) {
      lanes.push(new Lane(i * 40, true)); // Green lanes
    } else if (i >= 1 && i <= 5) {
      lanes.push(new Water(i * 40)); // Water lanes in 2nd, 3rd, 4th, and 5th lanes
      // Create logs in the water lanes
      for (let j = 0; j < 4; j++) {
        let logX = random(width);
        let logSpeed = random(1, 3);
        logs.push(new Log(logX, (i * 40), 70, 35, logSpeed));
      }
    } else {
      lanes.push(new Lane(i * 40, false)); // Gray lanes
    }
  }
}

function draw() {
  background(255);

  // Display lanes
  for (let lane of lanes) {
    lane.display();
  }

  // Display logs and check for player interaction
  for (let log of logs) {
    log.update();
    log.display();
    if (log.playerOnLog(player)) {
      player.x += log.speed;
    }
  }

  player.display();
}

function keyPressed() {
  if (!gameOver) {
    // Handle player movements
    // Example movement for arrow keys
    if (keyCode === UP_ARROW) {
      player.move(0, -2);
    } else if (keyCode === DOWN_ARROW) {
      player.move(0, 2);
    } else if (keyCode === LEFT_ARROW) {
      player.move(-2, 0);
    } else if (keyCode === RIGHT_ARROW) {
      player.move(2, 0);
    }
  }
}
