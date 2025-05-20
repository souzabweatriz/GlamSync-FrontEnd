import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => (
    <div className={styles.header}>
    <Image
        className={styles.back_icon}
        src="/icons/back-icon.png"
        alt="icon de voltar"
        width={50}
        height={50}
    />
    <div className={styles.logo}>GlamSync</div>
    <div className={styles.iconsContainer}>
        <div className={styles.iconCasa}></div>
        <div className={styles.iconAdicionar}></div>
        <div className={styles.iconChat}></div>
        <div className={styles.menu}></div>
        <div className={styles.iconSino}></div>
    </div>
</div>
);

export default Header;