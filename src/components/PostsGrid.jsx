"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/PostsGrid.module.css";

const posts = [
    "/media/image1.png",
    "/media/image2.png",
    "/media/image3.png",
    "/media/image4.png",
    "/media/image5.png",
    "/media/image6.png",
];

const PostsGrid = () => {
    const [showPosts, setShowPosts] = useState(false);
    const handleToggle = () => setShowPosts((prev) => !prev);

    return (
        <div>
            <div className={styles.postsHeaderWrapper}>
                <div className={styles.postsHeader}>
                    <span>Posts</span>
                    <button onClick={handleToggle} className={styles.arrowDown} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        aria-label={showPosts ? "Esconder posts" : "Mostrar posts"}
                    >
                        <Image
                            src="/media/iconSeta.png"
                            alt="Avatar"
                            width={27}
                            height={27}
                            className={styles.arrowDown}
                        />
                    </button>
                </div>
            </div>
            {showPosts && (
                <div className={styles.postsGrid}>
                    {posts.map((url, idx) => (
                        <img key={idx} src={url} alt={`Post ${idx + 1}`} className={styles.postImage} />
                    ))}
                </div>
            )}
        </div>
    );
};


export default PostsGrid;