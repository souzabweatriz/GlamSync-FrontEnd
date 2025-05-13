import React from "react";
import styles from "../styles/notification.module.css";

const SuggestionItem = ({ username }) => {
    return (
        <div className={styles.suggestion}>
            <div className={styles.profilePic}></div>
            <div className={styles.info}>
                <p className={styles.username}>{username}</p>
                <p className={styles.followed}>{}</p>
            </div>
            <button className={styles.followButton}>Seguir</button>
        </div>
    );
};

export default SuggestionItem;