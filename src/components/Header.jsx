"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        router.push('/logout');
    };

    return (
        <div className={styles.header}>
            <Image
                src="/flower.png"
                alt="icon de voltar"
                width={50}
                height={50}
                className={styles.flowerIcon}
            />
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
                <Link href="/notificacoes">
                    <div className={styles.iconSino}></div>
                </Link>
                <Link href="/profile">
                    <div
                        className={styles.menuPoint}
                        onClick={() => setMenuOpen(!menuOpen)}
                        
                    ></div>
                </Link>
                {menuOpen && (
                    <div className={styles.dropdownMenu} ref={menuRef}>
                        <div className={styles.dropdownLogo}>GlamSync</div>
                        <button className={styles.dropdownLogout} onClick={handleLogout}>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;