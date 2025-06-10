import Link from 'next/link';
import styles from './logout.module.css';

export default function Logout() {
    return (
        <div className={styles.logoutContainer}>
            <h1 className={styles.title}>Você saiu da sua conta!</h1>
            <p className={styles.message}>Esperamos te ver em breve!</p>
            <Link href="/initial">
                <button className={styles.button}>Voltar para a página inicial</button>
            </Link>
        </div>
    );
}