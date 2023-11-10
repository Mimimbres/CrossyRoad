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
 
   let isOnLog = false;
   for (let log of logs) {
     if (log.playerOnLog(this)) {
       this.x = constrain(this.x, this.size / 2, width - this.size / 2); // Keep player within canvas bounds
       isOnLog = true;
     }
   }
   this.onLog = isOnLog;
 
   // Check if the player is in the water and not on a log
   if (this.isInWater() && !this.onLog) {
     resetGame();
   }
  }
 
  // Method to check if the player is in a water lane
  isInWater() {
   for (let lane of lanes) {
     if (lane instanceof Water && this.y + this.size / 2 > lane.y && this.y - this.size / 2 < lane.y + 40) {
       return true;
     }
   }
   return false;
  }
 
  display() {
   fill(255);
   stroke(0); // Black outline
   strokeWeight(2);
   rectMode(CENTER);
   rect(this.x, this.y, this.size, this.size);
  }
 }
 