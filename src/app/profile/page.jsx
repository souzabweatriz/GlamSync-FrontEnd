import React from "react";
import Header from "../../components/Header";
import Post from "../../components/Post"
import ProfileHeader from "../../components/ProfileHeader";
import AboutSection from "../../components/AboutSection";
import styles from "../profile/profile.module.css";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className={styles.profilePageContainer}>
            <Header />
            <div className={styles.profileContent}>
                <ProfileHeader />
                <AboutSection />
                <Post rota={`${process.env.NEXT_PUBLIC_API_URL}posts`} />
            </div>
        </div>
    );
};

export default ProfilePage;

