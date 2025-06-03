import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from 'next/link';

const Header = ({ ImageProps }) => (
    <div className={styles.header}>
        {ImageProps ? (
            <Image
                className={styles.back_icon}
                src={ImageProps}
                alt="icon de voltar"
                width={50}
                height={50}
            />
        ) : null}
        <div className={styles.logo}>GlamSync</div>
        <div className={styles.iconsContainer}>
            <Link href="/Feed">
                <div className={styles.iconCasa}></div>
            </Link>
            <Link href="/adicionar">
                <div className={styles.iconAdicionar}></div>
            </Link>
            <Link href="/messages">
                <div className={styles.iconChat}></div>
            </Link>
            <Link href="/menu">
                <div className={styles.menu}></div>
            </Link>
            <Link href="/notificacoes">
                <div className={styles.iconSino}></div>
            </Link>
        </div>
    </div>
);

export default Header;