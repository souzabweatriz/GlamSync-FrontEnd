import Image from "next/image";
import styles from "../styles/FeedCard.module.css";

export default function FeedCard() {
    return (
        <div className={styles.feed}>
            <div className={styles.feedHeader}>
                <Image src="/icons/user.png" alt="User Icon" width={30} height={30} />
                <span>@username</span>
                <button className={styles.followBtn}>Follow +</button>
            </div>
            <div classname={styles.feedImage}>
                <Image src="/icons/vestido.png" alt="Vestido GUMMY" width={250} height={300} />
            </div>
            <div className={styles.feedFooter}>
                <div className={styles.feedActions}>
                    <Image src="/icons/heart.png" alt="Like" width={20} height={20} />
                    <Image src="/icons/comment.png" alt="Comment" width={20} height={20} />
                </div>
                <span>Vestido GUMMY - Fiozato</span>
            </div>
        </div>
    );
}