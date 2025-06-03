import React from "react";
import Image from "next/image";
import styles from "../styles/profile.module.css";

const ProfileHeader = () => (
    <div className={styles.profileHeader}>
        <div className={styles.avatarSection}>
            <Image
                src="/user.png"
                alt="Avatar"
                width={90}
                height={90}
                className={styles.avatarImg}
            />
            <div className={styles.username}>@username</div>
        </div>
        <div className={styles.profileMainInfo}>
            <div className={styles.profileName}>Your Name</div>
            <div className={styles.profileStats}>
                <div>
                    <span className={styles.statNumber}>18</span>
                    <span className={styles.statLabel}>Following</span>
                </div>
                <div className={styles.statDivider}></div>
                <div>
                    <span className={styles.statNumber}>20</span>
                    <span className={styles.statLabel}>Followers</span>
                </div>
            </div>
            <button className={styles.followBtn}>Follow <span className={styles.plus}>+</span></button>
        </div>
    </div>
);

export default ProfileHeader;

