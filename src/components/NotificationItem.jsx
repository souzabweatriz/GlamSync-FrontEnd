import React from "react";
import { FaUser } from "react-icons/fa"; 
import styles from "../styles/notification.module.css";

const NotificationItem = ({ user, action, date }) => {
    return (
        <div className={styles.notification}>
            <div className={styles.avatar}>
                <FaUser size={24} /> {}
            </div>
            <div className={styles.text}>
                <p className={styles.p}>
                    <strong>{user}</strong>
                    <br />
                    {action}
                </p>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    );
};

export default NotificationItem;
