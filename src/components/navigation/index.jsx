import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./navigation.scss";
import { navigationText } from "../../constants";

const NavigationComponent = ({ onMove }) => {
    const handleKeyPress = (event) => {
        switch (event.key) {
            case "ArrowUp":
                onMove("North");
                break;
            case "ArrowDown":
                onMove("South");
                break;
            case "ArrowRight":
                onMove("East");
                break;
            case "ArrowLeft":
                onMove("West");
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="navigation-container">
            <button data-testid="north-btn" onClick={() => onMove("North")}>
                {navigationText.north}
            </button>
            <button data-testid="south-btn" onClick={() => onMove("South")}>
                {navigationText.south}
            </button>
            <button data-testid="east-btn" onClick={() => onMove("East")}>
                {navigationText.east}
            </button>
            <button data-testid="west-btn" onClick={() => onMove("West")}>
                {navigationText.west}
            </button>
        </div>
    );
};

NavigationComponent.propTypes = {
    onMove: PropTypes.func.isRequired,
};

const Navigation = React.memo(NavigationComponent);

export default Navigation;
