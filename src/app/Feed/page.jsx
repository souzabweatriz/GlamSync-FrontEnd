import styles from "./feed.module.css";
import Image from "next/image";

export default function PrincipalFeed(){
    return(
        <main className={styles.main}>
            <header className={styles.header}>
        <div className={styles.iconsContainer}>
            <Image src="/icons/home.png" alt="ícone de casa marrom" width={24} height={24} />
        </div>
        <div className={styles.iconsContainer}>
            <Image src="/icons/iconAdicionar.png" alt="ícone de Adicionar marrom" width={20} height={20} />
        </div>
        <div className={styles.iconsContainer}>
            <Image src="/icons/iconChat.png" alt="ícone de Chat marrom" width={20} height={20} />
        </div>
        <div className={styles.iconsContainer}>
            <Image src="/icons/users.png" alt="ícone de Usuário marrom" width={20} height={20} />
        </div>
        <div className={styles.iconsContainer}>
            <Image src="/icons/iconSino.png" alt="ícone de Sino marrom" width={20} height={20} />
        </div>
        </header>
        </main>
    )
}
