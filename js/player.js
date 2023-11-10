// player.js

class Player {
  constructor() {
    this.size = 35;
    this.x = width / 2;
    this.y = 580; // Adjusted initial position
    this.onLog = false; // Add a flag to check if the player is on a log
  }

  move(xDir, yDir) {
    // Check boundaries before updating position
    if (this.x + xDir * 20 > 0 && this.x + xDir * 20 < width) {
      this.x += xDir * 20;
    }
    if (this.y + yDir * 20 > 0 && this.y + yDir * 20 < height) {
      this.y += yDir * 20;
    }
  }

  update() {
    // Update player logic here

    for (let log of logs) {
      if (log.playerOnLog(this)) {
        this.x = constrain(this.x, this.size / 2, width - this.size / 2); // Keep player within canvas bounds
        this.onLog = true;

      } else {
        this.onLog = false;
      }
    }
  
    // Check if the player goes below the canvas
    if (!this.onLog && this.y - this.size / 2 > height) {
      gameOver = true;
      displayGameOverModal();
    }
  }

  display() {
    fill(255);
    stroke(0); // Black outline
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}
