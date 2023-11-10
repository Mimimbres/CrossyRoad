// CAR.JS

class Car {
  constructor(laneIndex, isMovingRight = true) {
    this.size = 35;
    this.width = 70;
    this.height = 35;
    this.speed = 2; // Fixed speed for all cars
    this.isMovingRight = isMovingRight;
    this.y = (14 - laneIndex) * 40 + 20;
    this.x = isMovingRight ? 0 - this.width / 2 : width + this.width / 2;
    this.color = color(random(255), random(255), random(255)); // Random color
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
    fill(this.color); // Random color for cars
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }

  collidesWith(other) {
    // Check for collision using the distance between the centers of the car and player
    return (
      dist(this.x, this.y, other.x, other.y) < (this.width / 2 + other.size / 2) &&
      dist(this.x, this.y, other.x, other.y) < (this.height / 2 + other.size / 2)
    );
  }
}
