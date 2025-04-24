"use client";
import { useRouter } from "next/navigation";
import styles from "./signUp.module.css";
import Image from "next/image";
import UserIcon from "../../public/UserIcon.png"
import PadlockIcon from "../../public/PadlockIcon.png"
import GoogleIcon from "../../public/GoogleIcon.png";
import AppleIcon from "../../public/AppleIcon.png";
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
                    <Image className={styles.icon} src={UserIcon} alt="icon rosa de usuário"/>
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className={styles.input}>
                        <img className={styles.icon} src="/email-icon.png" alt="" />
                        <input type="text" placeholder="user@gmail.com" />
                    </div>
                    <div className={styles.input}>
                        <Image className={styles.icon} src={PadlockIcon} alt="Cadeado rosa de senha" />
                        <input type="password" placeholder="Password" />
                        <img className={styles.icon} src="/padlock-icon.png" alt="" />
                        <input type= {showPassword ? "text": "password"} 
                        placeholder="password"/>
                        <img className={styles.eye_icon} src={showPassword ? "/iconEye.png" : "/olho.png"} alt="" onClick={togglePasswordVisibility} /> {/* responsável por exibir ou esconder a senha quando clicar} */}
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
                    <Image className={styles.icon} src={GoogleIcon} alt="Logo do Google" />
                    <Image className={styles.icon} src={AppleIcon} alt="Logo da Apple" />
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