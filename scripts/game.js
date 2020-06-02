"use strict";

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector(".game-board");

function main(currentTime) {
    if (gameOver) {
        if (confirm("You have lost. Press ok to restart.")) {
            // Refresh the page
            window.location = "/";
        }

        return;
    }

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
    checkDeath();
}

function draw() {
    // Clear previous frame
    gameBoard.innerHTML = "";

    // Draw current frame
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}