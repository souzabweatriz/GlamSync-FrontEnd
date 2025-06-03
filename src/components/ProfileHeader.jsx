import React from "react";
import Image from "next/image";
import styles from "../styles/profileHeader.module.css";

const ProfileHeader = () => (
    <div className={styles.profileHeader}>
        <div className={styles.avatarSection}>
            <div className={styles.avatarTopBar}>
                <span className={styles.username}>@username</span>
                <button className={styles.followBtn}>Follow <span className={styles.plus}>+</span></button>
            </div>
            <Image
                src="/user.png"
                alt="Avatar"
                width={90}
                height={90}
                className={styles.avatarImg}
            />
        </div>
        <div className={styles.profileMainInfo}>
            <div className={styles.profileName}>
                <span className={styles.username}>Your Name</span>
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
    </div>
);

export default ProfileHeader;

