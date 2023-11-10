// water.js

class Water {
    constructor(yPos) {
      this.y = yPos;
    }
  
    display() {
      fill(0, 0, 255); // Blue color
      noStroke();
      rectMode(CORNER);
      rect(0, this.y, width, 40);
    }
  }
  