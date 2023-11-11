class Log {
  constructor(x, laneY, speed, direction) {
    this.x = x;
    this.y = laneY + 20; // Adjusted position to start 15px below the lane
    this.width = 70;
    this.height = 35;
    this.speed = speed;
    this.direction = direction; // Add this line
  }
 
  update() {
    // Move the log
    this.x += this.speed * this.direction; // Multiply speed by direction
 
    // Reset position if it goes off the screen
    if (this.x > width || this.x < 0) {
      this.x = this.direction > 0 ? 0 : width; // Reset position based on direction
    }
  }
 
  // Rest of the class...
 
 
  
    display() {
      fill(139, 69, 19); // Brown color
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
  
    playerOnLog(player) {
      // Check if the player is on the log
      return (
        player.x + player.size / 2 > this.x - this.width / 2 &&
        player.x - player.size / 2 < this.x + this.width / 2 &&
        player.y + player.size / 2 > this.y - this.height / 2 &&
        player.y - player.size / 2 < this.y + this.height / 2
      );
    }
  }
  