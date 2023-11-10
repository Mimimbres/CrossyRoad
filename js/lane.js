// LANE.JS

class Lane {
  constructor(yPos, isGreen) {
    this.y = yPos;
    this.isGreen = isGreen;
  }

  display() {
    if (this.isGreen) {
      fill(0, 255, 0); // Green color
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

  