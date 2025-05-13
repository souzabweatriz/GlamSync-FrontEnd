"use client"
import styles from "../initial/initial.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Initial() {
    const router = useRouter();
    return (
        <main className={styles.fundo}>
            <div className={styles.teste}>
                <h1 className={styles.title}>WELCOME!</h1>
                <div className={styles.logo}>
                    <div className={styles.description}>
                        <p>Fashion that conects</p>
                        <p>Style that impacts</p>
                    </div>
                </div>
            <div className={styles.buttons}>
                        <button
                            className={styles.button}
                            onClick={() => router.push("/SignIn")}
                        >
                            Log In
                            <span className={styles.icon}><Image className={styles.icon} src="/icons/GoogleIcon.png" alt="Logo do Google" width={32} height={32} /></span>
                        </button>
                        <button
                            className={styles.button}
                            onClick={() => router.push("/SignUp")}
                        >
                            SignUp
                            <span className={styles.icon}><Image className={styles.icon} src="/icons/GoogleIcon.png" alt="Logo do Google" width={32} height={32} /></span>
                        </button>
                    </div>
            </div>
        </main>
    )
}