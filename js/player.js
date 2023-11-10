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

    // Check for collisions with logs
    for (let log of logs) {
      if (log.playerOnLog(this)) {
        this.x += log.speed; // Update player's position based on the log's speed
        this.x = constrain(this.x, this.size / 2, width - this.size / 2); // Keep player within canvas bounds
        this.onLog = true;
        break; // Exit the loop if the player is on a log
      } else {
        this.onLog = false;
      }
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
