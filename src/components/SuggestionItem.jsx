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
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                <button className={`${styles.followButton} ${isFollowing ? styles.following: ""}`} onClick={handleFollowClick}>
                    {isFollowing ? "Unfollow" : "Follow"}
                    {!isFollowing && <span style={{fontWeight: 'bold', fontSize: '18px', color: '#f79489', marginLeft: 6}}>+</span>}
                </button>
            </div>
        </div>
    );
};

export default SuggestionItem;