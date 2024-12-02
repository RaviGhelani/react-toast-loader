import React from "react";
import "../styles/toast.css";

const Toast = ({ message, severity, open }) => {
    if (!open) return null;

    const severityClass = severity === "error" ? "toast-error" : "toast-success";

    return (
        <div className={`toast-container ${severityClass}`}>
            <div className="toast-message">{message}</div>
        </div>
    );
};

export default Toast;
