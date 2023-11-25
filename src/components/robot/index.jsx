import React from "react";
import "./robot.scss";

const RobotComponent = () => {
    return (
        <div className="robot-container">
            <span className="robot-emoji" role="img" aria-label="robot">
                🤖
            </span>
        </div>
    );
};

const Robot = React.memo(RobotComponent);

export default Robot;
