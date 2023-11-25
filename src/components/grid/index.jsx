import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { GRID_SIZE } from "../../config";
import Robot from "../robot";
import "./grid.scss";

const GridComponent = ({ position, onCellClick }) => {
    const createCell = (x, y, isRobotHere, onCellClick) => (
        <div
            key={`${x}-${y}`}
            className={`grid-cell ${isRobotHere ? "robot-cell" : ""}`}
            onClick={() => onCellClick(x, y)}
            data-testid={`cell-${x}-${y}`}
        >
            {isRobotHere && <Robot />}
        </div>
    );

    const generateGrid = useMemo(() => {
        const grid = [];
        for (let y = 1; y <= GRID_SIZE; y++) {
            for (let x = 1; x <= GRID_SIZE; x++) {
                const isRobotHere = x === position.x && y === position.y;
                grid.push(createCell(x, y, isRobotHere, onCellClick));
            }
        }
        return grid;
    }, [position, onCellClick]);

    return (
        <div
            className="grid-container"
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 100px)` }}
        >
            {generateGrid}
        </div>
    );
};

GridComponent.propTypes = {
    position: PropTypes.object.isRequired,
    onCellClick: PropTypes.func.isRequired,
};

const Grid = React.memo(GridComponent);

export default Grid;
