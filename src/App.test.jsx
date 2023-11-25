/* eslint-disable no-undef */
import { describe } from "vitest";
import App from "./App";
import { cleanup, render } from "@testing-library/react";

// Automatically unmount and cleanup DOM after the test is finished
afterEach(() => cleanup());

describe("App", () => {
    it("renders without crashing", () => {
        const { container } = render(<App />);
        expect(container).toBeTruthy();
    });
});
