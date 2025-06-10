"use client";

import styles from './logout.module.css';
import Header from "../../components/Header";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/initial');
        }, 2000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <Header />
            <div className={styles.logoutContainer}>
                <h1 className={styles.title}>Você saiu da sua conta!</h1>
                <p className={styles.message}>Esperamos te ver em breve!</p>
            </div>
        </>
    );
}