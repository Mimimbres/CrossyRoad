class Obstacle {
    constructor(laneIndex) {
      this.size = 35;
      this.width = 70;
      this.height = 35;
      this.speed = 2;
      this.isMovingRight = laneIndex % 2 === 0;
      this.y = (14 - laneIndex) * 40 + 20;
      this.x = this.isMovingRight ? 0 - this.width / 2 : width + this.width / 2;
      this.color = color(random(255), random(255), random(255));
    }
  
    update() {
      
      this.x += this.isMovingRight ? this.speed : -this.speed;
  
      // Reset position if it goes off the screen
      if (this.isMovingRight && this.x > width + this.width / 2) {
        this.x = 0 - this.width / 2;
      } else if (!this.isMovingRight && this.x < 0 - this.width / 2) {
        this.x = width + this.width / 2;
      }
    }
  
    display() {
      fill(this.color); // Red color for obstacles
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
  
    collidesWith(other) {
      // Check for collision using the distance between the centers of the obstacle and player
      return (
        dist(this.x, this.y, other.x, other.y) < (this.width / 2 + other.size / 2) &&
        dist(this.x, this.y, other.x, other.y) < (this.height / 2 + other.size / 2)
      );
    }
  }
  