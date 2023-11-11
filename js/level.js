window.level = {
    level: 1,
    speedMultiplier: 1,
  
    checkLevelCompletion(player) {
      if (player.y <= 20) {
        this.level++;
        this.speedMultiplier *= 1.5;
        console.log('Player has reached y=20');
        this.levelUp();
      }
    },
  
    levelUp() {
      // Reset player position
      player.y = 580; // Set the player's y-coordinate to the top of the highest lane
  
      // Increase the speed of obstacles, cars, and logs
      for (let obstacle of obstacles) {
        obstacle.speed *= this.speedMultiplier;
      }
  
      for (let car of cars) {
        car.speed *= this.speedMultiplier;
      }
  
      for (let log of logs) {
        log.speed *= this.speedMultiplier;
      }
    },
  
    displayLevel() {
      textSize(32);
      fill(0);
      text(`Level ${this.level}`, 10, 30);
    },
  
    getSpeedMultiplier() {
      return this.speedMultiplier;
    }
  };
  