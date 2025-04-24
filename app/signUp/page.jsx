"use client";

import { useRouter } from "next/navigation";
import styles from "./signUp.module.css";

export default function SignUp() {
    const router = useRouter();

    return (
        <div className={styles.signUp}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <img className={styles.back_icon} src="/back-icon.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h1>Sign Up</h1>
                    <h2>Create your new acount</h2>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <img className={styles.icon} src="/user-icon.png" alt="" />
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className={styles.input}>
                        <img className={styles.icon} src="/email-icon.png" alt="" />
                        <input type="text" placeholder="user@gmail.com" />
                    </div>
                    <div className={styles.input}>
                        <img className={styles.icon} src="/padlock-icon.png" alt="" />
                        <input type="password" placeholder="Password" />
                    </div>

                    <button>Sign Up</button>
                    <div className={styles.check}>
                        <input className={styles.checkbox} type="checkbox" />
                        <p>Remembre Me</p>
                    </div>
                </div>
                <div className={styles.otherWay}>
                    <div className={styles.lineArea}>
                        <div className={styles.line}></div>
                        <p>Or continue with</p>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.signUpIcon}>
                        <img className={styles.icon} src="/google-icon.png" alt="" />
                        <img className={styles.icon} src="/apple-icon.png" alt="" />
                    </div>
                    <p className={styles.text}>
                        Already have an account?{""}
                        <span onClick={() => router.push("/login")}> Log In</span>
                    </p>
                </div>
            </div>
        </div>
    )
}