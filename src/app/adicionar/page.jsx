import styles from "../Adicionar/Adicionar.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Adicionar() {
    return (
        <div className={styles.main}>
            <div className={styles.back}>
            <Link href="/Feed">
                <Image
                src="/icons/back-icon.png"
                width={50}
                height={50}
                alt="ícone de voltar rosa"
                />
            </Link>
            </div>
            <div className={styles.postCard}>
                <div className={styles.cardHeader}>
                    <span className={styles.title}>What's Up?</span>
                    <button className={styles.postButton}>POST</button>
                </div>
                <div className={styles.addPhotoArea}>
                    <span>Add Photo</span>
                    <div className={styles.addPhotoIcon}>
                        <Image 
                        src="/icons/add.png"
                        alt="ícone de adicionar na cor cinza"
                        width={40}
                        height={40}
                        />
                    </div>
                </div>
                <input
                    type="text"
                    className={styles.inputPost}
                    placeholder="Write your post here..."
                />
            </div>
        </div>
    );
}