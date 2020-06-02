"use strict";

import { getInputDirection } from "./controls.js";

export const SNAKE_SPEED = 5; // Update speed

const snakeBody = [
    { x: 11, y: 11 }
];

export function update() {
    const inputDirection = getInputDirection();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
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