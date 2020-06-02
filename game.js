"use strict";

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.querySelector(".game-board");

function main(currentTime) {
    requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;
    
    update();
    draw();
}

main();

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    // Clear previous frame
    gameBoard.innerHTML = "";

    // Draw current frame
    drawSnake(gameBoard);
    drawFood(gameBoard);
}