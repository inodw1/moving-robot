import React, { useState, useCallback } from "react";
import Grid from "./components/grid";
import Navigation from "./components/navigation";
import { GRID_SIZE, START_POSITION } from "./config";
import "./app.scss";

function App() {
    const [position, setPosition] = useState(START_POSITION);

    const move = useCallback((direction) => {
        setPosition((prevPosition) => {
            let { x, y } = prevPosition;
            if (direction === "North" && y > 1) y -= 1;
            if (direction === "South" && y < GRID_SIZE) y += 1;
            if (direction === "East" && x < GRID_SIZE) x += 1;
            if (direction === "West" && x > 1) x -= 1;
            return { x, y };
        });
    }, []);

    const teleport = useCallback((x, y) => {
        setPosition({ x, y });
    }, []);

    return (
        <div className="app-container">
            <Grid position={position} onCellClick={teleport} />
            <div className="navigation-container-wrapper">
                <Navigation onMove={move} />
            </div>
        </div>
    );
}

export default App;
