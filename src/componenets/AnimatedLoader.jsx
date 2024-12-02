import React from "react";
import "../styles/animations.css";

const AnimatedLoader = ({ loadingOpen }) => {
    if (!loadingOpen) return null;

    return (
        <div className="backdrop">
            <div className="animated-gear"></div>
        </div>
    );
};

export default AnimatedLoader;
