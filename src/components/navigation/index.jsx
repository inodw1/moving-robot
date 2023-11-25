import React from "react";
import PropTypes from "prop-types";
import "./navigation.scss";
import { navigationText } from "../../constants";

const NavigationComponent = ({ onMove }) => {
    return (
        <div className="navigation-container">
            <button onClick={() => onMove("North")}>
                {navigationText.north}
            </button>
            <button onClick={() => onMove("South")}>
                {navigationText.south}
            </button>
            <button onClick={() => onMove("East")}>
                {navigationText.east}
            </button>
            <button onClick={() => onMove("West")}>
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
