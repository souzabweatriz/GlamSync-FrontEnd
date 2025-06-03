import react from "react";
import styles from "../styles/PostsGrid.module.css";

const posts = [
    "https://i.imgur.com/1.jpg",
    "https://i.imgur.com/2.jpg",
    "https://i.imgur.com/3.jpg",
    "https://i.imgur.com/4.jpg",
    "https://i.imgur.com/5.jpg",
    "https://i.imgur.com/6.jpg",
];

const PostsGrid = () => (
    <div>
        <div className={styles.postsHeader}>
            <span>Posts</span>
            <span className={styles.arrowDown}>▼</span>
        </div>
        <div className={styles.postsGrid}>
            {posts.map((url, idx) => (
                <img key={idx} src={url} alt={`Post ${idx + 1}`} className={styles.postImage} />
            ))}
        </div>
    </div>
);

export default PostsGrid;