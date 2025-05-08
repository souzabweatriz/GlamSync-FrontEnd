"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./signUp.module.css";
import { useState } from "react";


export default function SignUp() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false); // controla a visibilidade d senha

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.signUp}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <Image className={styles.back_icon} src="/icons/back-icon.png" alt="icon de voltar" width={32} height={32} />
                </div>
                <div className={styles.text}>
                    <h1>Sign Up</h1>
                    <h2>Create your new acount</h2>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <Image className={styles.icon} src="/icons/UserIcon.png" alt="icon rosa de usuário" width={32} height={32} />
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className={styles.input}>
                        <Image className={styles.icon} src="/icons/email-icon.png" alt="Icon de Email" width={32} height={32} />
                        <input type="text" placeholder="user@gmail.com" />
                    </div>
                    <div className={styles.input}>
                        <Image className={styles.icon} src="/icons/PadlockIcon.png" alt="Cadeado rosa de senha" width={32} height={32} />
                        <input type={showPassword ? "text" : "password"}
                            placeholder="Password" />
                        <Image className={styles.eye_icon} src={showPassword ? "/icons/iconEye.png" : "/icons/olho.png"} alt=""  width={32} height={32} onClick={togglePasswordVisibility} /> {/* responsável por exibir ou esconder a senha quando clicar} */}
                    </div>


                    <button>Sign Up</button>
                    <div className={styles.check}>
                        <input className={styles.checkbox} type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                </div>
                <div className={styles.otherWay}>
                    <div className={styles.lineArea}>
                        <div className={styles.line}></div>
                        <p>Or continue with</p>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.signUpIcon}>
                        <Image className={styles.icon} src="/icons/GoogleIcon.png" alt="Logo do Google" width={32} height={32} />
                        <Image className={styles.icon} src="/icons/AppleIcon.png" alt="Logo da Apple" width={32} height={32} />
                    </div>
                    <p className={styles.text}>
                        Already have an account?{""}
                        <span onClick={() => router.push("/signIn")}> Log In</span>
                    </p>
                </div>
            </div>
        </div>
    ) 
}