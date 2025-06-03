import React from "react";
import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";
import AboutSection from "../../components/AboutSection";
import PostsGrid from "../../components/PostsGrid";

const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            <Header />
            <main className="profile-page">
                <ProfileHeader />
                <AboutSection />
                <PostsGrid />
            </main>
        </div>
    );
};

export default ProfilePage;