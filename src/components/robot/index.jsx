import React from "react";
import "./robot.scss";

const RobotComponent = () => {
    const robotImageSrc = "/robot.jpg";
    return (
        <div className="robot-container">
            <span className="robot-emoji" role="img" aria-label="robot">
                <img src={robotImageSrc} alt="Robot" className="robot-image" />
            </span>
        </div>
    );
};

const Robot = React.memo(RobotComponent);

export default Robot;
