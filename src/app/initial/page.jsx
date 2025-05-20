"use client"

import styles from "../initial/initial.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Initial() {
    const router = useRouter();

    return (
        <main className={styles.fundo}>
            <div className={styles.container}>
                <h1 className={styles.title}>WELCOME!</h1>
                <div className={styles.logo}></div>
                <div className={styles.description}>
                    <p>Fashion that conects</p>
                    <p>Style that impacts</p>
                </div>
            </div>
            <div className={styles.buttons}>
                        <button
                            className={styles.button}
                            onClick={() => router.push("/signIn")}
                        >
                            Log In
                            <span className={styles.icon}><Image className={styles.icon} src="/icons/icon-entrar.png" alt="Logo do Google" width={32} height={32} /></span>
                        </button>
                        <button
                            className={styles.button}
                            onClick={() => router.push("/signUp")}
                        >
                            SignUp
                            <span className={styles.icon}><Image className={styles.icon} src="/icons/user.png" alt="Logo do Google" width={32} height={32} /></span>
                        </button>
                    </div>

        </main>
    )
}