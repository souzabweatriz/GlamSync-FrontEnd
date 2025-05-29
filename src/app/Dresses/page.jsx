import Header from "../../components/Header";
import styles from "./dresses.module.css";
import Image from "next/image";

export default function Dresses() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.searchContainer}>
                <Image src="/lupa.png" alt="Search Icon" width={20} height={20} />
                <input type="text" placeholder="Search for dresses..." className={styles.searchInput} />
            </div>
        </div>
    )
}