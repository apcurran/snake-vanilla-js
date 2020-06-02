"use strict";

export const SNAKE_SPEED = 1; // Update speed

const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
    { x: 13, y: 11 },
    { x: 14, y: 11 }
];

export function update() {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    // snakeBody[0].x += 0;
    // snakeBody[0].y += 1;
}

export function draw(gameBoard) {
    for (let segment of snakeBody) {
        const snakeElement = document.createElement("div");

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");

        gameBoard.append(snakeElement);
    }
}