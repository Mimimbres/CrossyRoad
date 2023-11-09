let player;
let lanes = [];

function setup() {
  createCanvas(600, 600);
  player = new Player();

  // Create 15 lanes
  for (let i = 0; i < 15; i++) {
    if (i === 0 || i === 14) {
      lanes.push(new Lane(i * 40, true)); // Green lanes
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

  player.update();
  player.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === 'W') {
    player.move(0, -2);
  } else if (keyCode === DOWN_ARROW || key === 'S') {
    player.move(0, 2);
  } else if (keyCode === LEFT_ARROW || key === 'A') {
    player.move(-2, 0);
  } else if (keyCode === RIGHT_ARROW || key === 'D') {
    player.move(2, 0);
  }
}

class Player {
  constructor() {
    this.size = 35;
    this.x = width / 2;
    this.y = 580;
    ;
  }

  move(xDir, yDir) {
    this.x += xDir * 20;
    this.y += yDir * 20;
  }

  update() {
    // Update player logic here
    // Check for collisions with cars and rest points
  }

  display() {
    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Lane {
  constructor(yPos, isGreen) {
    this.y = yPos;
    this.isGreen = isGreen;
  }

  display() {
    if (this.isGreen) {
      fill(0, 255, 0);
    } else {
      fill(169); // Gray color
      stroke(255); // White color for dotted outline
      strokeWeight(2);
      for (let x = 0; x < width; x += 10) {
        point(x, this.y);
      }
    }

    noStroke();
    rectMode(CORNER);
    rect(0, this.y, width, 40);
  }
}

// Add more classes for cars, rest points, etc.
