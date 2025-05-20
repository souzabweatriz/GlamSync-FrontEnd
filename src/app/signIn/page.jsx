"use client";
import styles from "./signIn.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../components/ButtonLogin.jsx";
import Link from 'next/link';

export default function SignIn() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const handleCheck = () => {
        if (input1.length === 0 || input2.length === 0) {
            setMatch(false);
            setError("Preencha todos os Campos");
        } else {
            setMatch(true);
            setError("Sucesso ao entrar!");
            setTimeout(() => {
                router.push("/initial"); 
            }, 1000);
        }
    };

    return (
        <main className={styles.container}>
              <div className={styles.header}>
              <Link href="/initial">
                    <Image className={styles.back_icon} src="/icons/back-icon-claro.png" alt="icon de voltar"  width={50} height={50} />
              </Link>
                </div>
                <div className={styles.initial}>
                <div className={styles.image}></div>
                <div className={styles.texts}>
                    <p>Fashion that conects</p>
                    <p>Style that impacts</p>
                </div>
                </div>
            <div className={styles.card}>
                <h1 className={styles.title}>Welcome Back!</h1>
                <p className={styles.description}>Log in to your account</p>
                <div className={styles.inputs}>
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Username"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        />
                        <Image
                            className={styles.iconInput}
                            src="/icons/UserIcon.png"
                            alt="icon rosa de usuário"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.input}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                        <Image
                            className={styles.iconInput}
                            src="/icons/PadlockIcon.png"
                            alt="Cadeado rosa de senha"
                            width={32}
                            height={32}
                        />
                        <Image className={styles.eye_icon} src={showPassword ? "/icons/iconEye.png" : "/icons/olho.png"} alt="" width={32} height={32} onClick={togglePasswordVisibility} />
                    </div>
                <div className={styles.label}>
                    <label className={styles.check}>
                        <input
                            className={styles.checkbox}
                            type="checkbox" checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className={styles.checkCustom}></span>
                        <p className={styles.description}>Remember Me</p>
                    </label>
                </div>
                <div className={styles.button}>
                <Button action={handleCheck} props="Log In" className={styles.button} />
                {match !== null && <p className={styles.error}>{error}</p>}
                </div>
                </div>
                <p className={styles.text}>
                    Don't have an account?{" "}
                    <span className={styles.span} onClick={() => router.push("/signUp")}>Sign Up</span>
                </p>

                <div className={styles.otherWay}>
                    <div className={styles.lineArea}>
                        <div className={styles.line}></div>
                        <p>Login With</p>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.signUpIcon}>
                        <Image className={styles.icon} src="/icons/GoogleIcon.png" alt="Logo do Google" width={32} height={32} />
                        <Image className={styles.icon} src="/icons/AppleIcon.png" alt="Logo da Apple" width={32} height={32} />
                    </div>
                </div>
            </div>
        </main>
    );
}
