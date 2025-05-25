import styles from "./feed.module.css";
import Image from "next/image";
import PageFeed from "../../components/PageFeed"

export default function PrincipalFeed() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
            <div className={styles.image}>
                <Image src="/Logo.png" alt="Logo GlamSync" width={300} height={300} />
            </div>
            <div className={styles.section}>
                <Image
                    src="/icons/home.png"
                    alt="ícone de casa marrom"
                    width={23}
                    height={23}
                    className={styles.iconsContainer}
                />
                <Image
                    src="/icons/iconAdicionar.png"
                    alt="ícone de Adicionar marrom"
                    width={24}
                    height={24}
                    className={styles.iconsContainer}
                />
                <Image
                    src="/icons/iconChat.png"
                    alt="ícone de Chat marrom"
                    width={24}
                    height={24}
                    className={styles.iconsContainer}
                />
                <Image
                    src="/icons/users.png"
                    alt="ícone de Usuário marrom"
                    width={24}
                    height={24}
                    className={styles.iconsContainer}
                />
                <Image
                    src="/icons/iconSino.png"
                    alt="ícone de Sino marrom"
                    width={24}
                    height={24}
                    className={styles.iconsContainer}
                />
            </div>
            </div>
            <PageFeed />
        </div>
    )
}
