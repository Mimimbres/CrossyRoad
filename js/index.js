let player;
let lanes = [];
let obstacles = [];
let cars = [];
let gameOver = false;

function setup() {
  createCanvas(600, 600);
  player = new Player();

  // Create 15 lanes
  for (let i = 0; i < 15; i++) {
    if (i === 0 || i === 10 || i === 14) {
      lanes.push(new Lane(i * 40, true)); // Green lanes
    } else {
      lanes.push(new Lane(i * 40, false)); // Gray lanes
    }
  }

  // Create initial obstacles
  obstacles.push(new Obstacle(1)); // Obstacle in the 2nd lane (from the bottom) moving left to right
  obstacles.push(new Obstacle(2)); // Obstacle in the 3rd lane moving right to left
  obstacles.push(new Obstacle(3)); // Obstacle in the 4th lane moving left to right

  // Create initial cars
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 3; j++) {
      cars.push(new Car(j));
    }
  }

  // Add more cars in each lane
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 3; j++) {
      cars.push(new Car(j, cars[0].isMovingRight));
    }
  }
}

function draw() {
  background(255);

  // Display lanes
  for (let lane of lanes) {
    lane.display();
  }

  // Display obstacles and check for collisions
  for (let obstacle of obstacles) {
    obstacle.update();
    obstacle.display();
    if (!gameOver && obstacle.collidesWith(player)) {
      gameOver = true;
      displayGameOverModal();
    }
  }

  // Display cars and check for collisions
  for (let car of cars) {
    car.update();
    car.display();
    if (!gameOver && car.collidesWith(player)) {
      gameOver = true;
      displayGameOverModal();
    }
  }

  player.update();
  player.display();
}

function keyPressed() {
  if (!gameOver) {
    if (keyCode === UP_ARROW) {
      player.move(0, -2);
    } else if (keyCode === DOWN_ARROW) {
      player.move(0, 2);
    } else if (keyCode === LEFT_ARROW) {
      player.move(-2, 0);
    } else if (keyCode === RIGHT_ARROW) {
      player.move(2, 0);
    }
  }
}

function displayGameOverModal() {
  // Display the modal window with "GAME OVER" text
  const modal = createDiv('').class('modal');
  const modalContent = createDiv('GAME OVER\nClick anywhere to restart').class('modal-content');

  modal.child(modalContent);
  modal.mousePressed(restartGame);

  // Position the modal in the center
  modal.position(0, 0);
  modal.style('display', 'flex');
}

function restartGame() {
  // Remove the modal from the DOM
  select('.modal').remove();

  // Reset game state
  gameOver = false;
  player = new Player();
  obstacles = [];
  cars = [];

  // Create initial obstacles
  obstacles.push(new Obstacle(1));
  obstacles.push(new Obstacle(2));
  obstacles.push(new Obstacle(3));

  // Create initial cars
  for (let i = 0; i < 5; i++) {
    let laneIndex = floor(random(1, 4)); // Randomly select a lane with cars
    cars.push(new Car(laneIndex));
  }
}