import styles from "../styles/AddUser.module.css";
import Image from "next/image";

export default function AddUser() {
    return (
        <div className={styles.addUserRight}>
            <div className={styles.container}>
                <Image
                    src="/icons/addUser.png"
                    alt="Add User"
                    width={30}
                    height={30}
                    className={styles.image}
                />
            </div>
        </div>
    )
}
