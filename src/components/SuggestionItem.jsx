import React from "react";
import styles from "../styles/notification.module.css";

const SuggestionItem = ({ username, text, image }) => {
    return (
        <div className={styles.suggestion}>
            <img
                className={styles.profilePic}
                src={image}
                alt={`Foto de ${username}`}
                width={50}
                height={50}
            />
            <div className={styles.text}>
                <div className={styles.username}>{username}</div>
                <div className={styles.description}>{text}</div>
            </div>
            <button className={styles.followButton}>Follow</button>
        </div>
    );
};

export default SuggestionItem;