import React from "react";
import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";
import AboutSection from "../../components/AboutSection";
import PostsGrid from "../../components/PostsGrid";
import styles from "../../styles/profile.module.css";

const ProfilePage = () => {
    return (
        <div className={styles.profilePageContainer}>
            <Header />
            <div className={styles.profileContent}>
                <ProfileHeader />
                <AboutSection />
                <PostsGrid />
            </div>
        </div>
    );
};

export default ProfilePage;

