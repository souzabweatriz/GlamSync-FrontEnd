"use client";

import React, { useState } from "react";
import styles from "../styles/notification.module.css";

const SuggestionItem = ({ username, text, image }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };
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
            <button className={`${styles.followButton} ${isFollowing ? styles.following: ""}`} onClick={handleFollowClick}> {isFollowing ? "Unfollow" : "Follow"}</button>
        </div>
    );
};

export default SuggestionItem;