class Player {
    constructor() {
      this.size = 35;
      this.x = width / 2;
      this.y = 580; // Adjusted initial position
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
      // Check for collisions with cars and rest points
    }
  
    display() {
      fill(255);
      stroke(0); // Black outline
      strokeWeight(2);
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    }
  }
  