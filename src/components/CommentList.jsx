import CommentItem from "./CommentItem";
import styles from "../styles/CommentList.module.css";

const comments = [
    { avatar: "/icons/user.png", username: "@arianagrande", comment: "OMGGG beautiful dress!!" },
    { avatar: "/icons/user.png", username: "@selenagomez", comment: "Where can I buy it?!?!!" },
    { avatar: "/icons/user.png", username: "@dovecameron", comment: "I loved <3" },
    { avatar: "/icons/user.png", username: "@sabrinacarpenter", comment: "I wanna dress it on my show!!!" },
    { avatar: "/icons/user.png", username: "@lilnasx", comment: "I loved this shade of pink" },
    { avatar: "/icons/user.png", username: "@cardib", comment: "So cutee" },
];

export default function CommentList() {
    return (
        <div className={styles.commentList}>
            {comments.map((c, i) => (
                <CommentItem key={i} {...c} />
            ))}
        </div>
    );
}