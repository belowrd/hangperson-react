import React from "react";

const Notification = ({ showNotification }) => {
    return (
        <div
            className={`notification-container ${
                showNotification ? "show" : ""
            }`}
        >
            <p>you already tried that 🙄</p>
        </div>
    );
};

export default Notification;
