import React from "react";
import Image from "next/image";

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <div className="profile-info">
                <Image 
                    src="/user.png" 
                    alt="Profile Avatar" 
                    width={80} 
                    height={80} 
                    className="profile-avatar"
                />
                <div>
                    <h2>@username</h2>
                    <h1>Your Name</h1>
                    <div className="profile-stats">
                        <span>18 Following</span>
                        <span>20 Followers</span>
                    </div>
                </div>
            </div>  
            <button className="follow-button">Follow +</button>
        </div>
    );
};

export default ProfileHeader;