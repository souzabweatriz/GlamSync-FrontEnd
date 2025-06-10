"use client";

import React, {useState} from "react";
import Image from "next/image";
import styles from "../styles/profileHeader.module.css";

const ProfileHeader = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing((prev) => !prev);
    };

    return (
        <div className={styles.profileHeader}>
            <div className={styles.profileMainInfo}>
                <div className={styles.profileName}>
                    <span className={styles.username}>@samanthabr_</span>
                    <span className={styles.realName}>Samantha Rios</span>
                </div>
                <div className={styles.profileStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>18</span>
                        <span className={styles.statLabel}>Following</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>20</span>
                            <span className={styles.statLabel}>Followers</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.avatarSection}>
                <div className={styles.avatarTopBar}>
                    <button
                        className={isFollowing ? `${styles.followBtn} ${styles.following}` : styles.followBtn}
                        onClick={handleFollowClick}
                    >
                        {isFollowing ? (
                            <>
                                Following <span className={styles.checkMark}>✔</span>
                            </>
                        ) : (
                            <>Follow <span className={styles.plus}>+</span></>
                        )}
                    </button>
                </div>
                <Image
                    src="/media/perfilSaman.png"
                    alt="Avatar"
                    width={90}
                    height={90}
                    className={styles.avatarImg}
                />
            </div>
        </div>
    );
}

export default ProfileHeader;

