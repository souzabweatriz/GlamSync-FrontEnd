import Image from "next/image";
import styles from "../styles/CommentItem.module.css";

export default function CommentItem({ avatar, username, comment }) {
    return (
        <div className={styles.commentItem}>
            <Image src={avatar} alt={username} width={24} height={24} />
            <div>
                <strong>{username}</strong>
                <p>{comment}</p>
            </div>
        </div>
    );
}