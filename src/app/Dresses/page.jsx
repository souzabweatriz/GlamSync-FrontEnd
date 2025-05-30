import Header from "../../components/Header";
import styles from "./dresses.module.css";
import Image from "next/image";

export default function Dresses() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.searchContainer}>
                <Image src="/icons/lupa.png" alt="Search Icon" width={20} height={20} />
                <input type="text" placeholder="Search for dresses..." className={styles.searchInput} />
            </div>
            <div className={styles.categories}>
                <div className={styles.categoryItem}>
                    <Image src="/icons/dress.png" alt="Dress" width={40} height={40} />
                    <span>Dress</span>
                </div>
                <div className={styles.categoryItem}>
                    <Image src="/icons/hat.png" alt="Hat" width={40} height={40} />
                    <span>Hat</span>
                </div>
                <div className={styles.categoryItem}>
                    <Image src="/icons/shoes.png" alt="Shoes" width={40} height={40} />
                    <span>Shoes</span>
                </div>
                <div className={styles.categoryItem}>
                    <Image src="/icons/makeup.png" alt="Make Up" width={40} height={40} />
                    <span>Make Up</span>
                </div>
                <div className={styles.categoryItem}>
                    <Image src="/icons/jewelry.png" alt="Jewelry" width={40} height={40} />
                    <span>Jewelry</span>
                </div>
            </div>
            <div className={styles.feedSection}>
                <div className={styles.feed}>
                    <div className={styles.feedheader}>
                        <Image src="/icons/user.png" alt="User Icon" width={30} height={30} />
                        <span>@username</span>
                        <button className={styles.followBtn}>
                            Follow +
                        </button>
                    </div>
                    <div className={styles.feedImage}>
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
            </div>
        </div>
    )
}