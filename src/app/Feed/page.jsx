import styles from "./feed.module.css";
import Image from "next/image";
import Link from 'next/link';
import PageFeed from "../../components/PageFeed"

export default function PrincipalFeed() {

    const navItems = [
        { href: "/initial", src: "/icons/home.png", alt: "ícone de casa marrom", size: 24 },
        { href: "/initial", src: "/icons/iconAdicionar.png", alt: "ícone de adicionar marrom", size: 27 },
        { href: "/initial", src: "/icons/iconChat.png", alt: "ícone de chat marrom", size: 27 },
        { href: "/initial", src: "/icons/users.png", alt: "ícone de usuário marrom", size: 27 },
        { href: "/initial", src: "/icons/iconSino.png", alt: "ícone de sino marrom", size: 27 },
    ];

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                {navItems.map((item, index) => (
                    <Link href={item.href} key={index} className={styles.navLink}>
                        <Image src={item.src} alt={item.alt} width={item.size} height={item.size} />
                    </Link>
                ))}
            </div>
            <div>
                <Image src="/LogoGrande.png" alt="ícone de Chat marrom" width={300} height={300} />
            </div>
            <PageFeed />
        </main>
    )
}
