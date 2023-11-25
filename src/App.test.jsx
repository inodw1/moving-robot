/* eslint-disable no-undef */
import { describe } from "vitest";
import App from "./App";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { START_POSITION, GRID_SIZE } from "./config";

// Automatically unmount and cleanup DOM after the test is finished
afterEach(() => cleanup());

describe("App", () => {
    it("renders without crashing", () => {
        const { container } = render(<App />);
        expect(container).toBeTruthy();
    });

    describe("move function", () => {
        it("updates position state correctly for each direction", () => {
            render(<App />);

            const northButton = screen.getByTestId("north-btn");
            const southButton = screen.getByTestId("south-btn");
            const eastButton = screen.getByTestId("east-btn");
            const westButton = screen.getByTestId("west-btn");

            // Move North
            fireEvent.click(northButton);
            if (START_POSITION.y > 1) {
                expect(
                    screen.getByTestId(
                        `cell-${START_POSITION.x}-${START_POSITION.y - 1}`
                    )
                ).toHaveClass("robot-cell");
            }

            // Move South
            fireEvent.click(southButton);
            if (START_POSITION.y < GRID_SIZE) {
                expect(
                    screen.getByTestId(
                        `cell-${START_POSITION.x}-${START_POSITION.y + 1}`
                    )
                ).toHaveClass("robot-cell");
            }

            // Move East
            fireEvent.click(eastButton);
            if (START_POSITION.x < GRID_SIZE) {
                expect(
                    screen.getByTestId(
                        `cell-${START_POSITION.x + 1}-${START_POSITION.y}`
                    )
                ).toHaveClass("grid-cell");
            }

            // Move West
            fireEvent.click(westButton);
            if (START_POSITION.x > 1) {
                expect(
                    screen.getByTestId(
                        `cell-${START_POSITION.x - 1}-${START_POSITION.y}`
                    )
                ).toHaveClass("robot-cell");
            }
        });
    });

    describe("teleport function", () => {
        it("teleports the robot to the specified cell", () => {
            render(<App />);

            const targetX = 3;
            const targetY = 3;

            fireEvent.click(screen.getByTestId(`cell-${targetX}-${targetY}`));

            expect(
                screen.getByTestId(`cell-${targetX}-${targetY}`)
            ).toHaveClass("robot-cell");
        });
    });
});
