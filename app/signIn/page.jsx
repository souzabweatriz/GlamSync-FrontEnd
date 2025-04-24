"use client";
import styles from "./signIn.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UserIcon from "../../public/UserIcon.png";
import PadlockIcon from "../../public/PadlockIcon.png";
import Button from "../../components/ButtonLogin";
import GoogleIcon from "../../public/GoogleIcon.png";
import AppleIcon from "../../public/AppleIcon.png";
import Logo from "../../public/Logo.png"

export default function SignIn() {

    const router = useRouter();

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null)

    const handleCheck = () => {
        if (input1.length === 0) {
            setMatch(false);
            setError("Preencha todos os Campos");
        } else if (input2.length === 0) {
            setMatch(false);
            setError("Preencha todos os Campos");
        } else {
            setMatch(true);
            setError("Conta criada com sucesso!");
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.image}>
            <Image className={styles.logo} src={Logo} alt="Logo do App, Flor rosa" />
            </div>
            <div className={styles.card}>
                <div className={styles.cardcontainer}>
                <h1 className={styles.title}>Welcome Back!</h1>
                <p className={styles.description}>Log in to your account</p>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <Image className={styles.icon} src={UserIcon} alt="icon rosa de usuário" />
                        <input type="text" placeholder="Username" value={input1} onChange={(e) => setInput1(e.target.value)} />
                    </div>
                    <div className={styles.input}>
                        <Image className={styles.icon} src={PadlockIcon} alt="Cadeado rosa de senha" />
                        <input type="password" placeholder="Password" value={input2} onChange={(e) => setInput2(e.target.value)} />
                    </div>
                    <div className={styles.check}>
                        <input className={styles.checkbox} type="checkbox" />
                        <p>Remembre Me</p>
                    </div>
                    <p className={styles.text}>
                        Don't have an account?{""}
                        <span onClick={() => router.push("/signUp")}>Sign Up</span>
                    </p>
                    <div className={styles.line} />
                    <p className={styles.text}>Log In with</p>
                    <div className={styles.line} />
                    <div className={styles.SignInIcon}>
                        <Image className={styles.icon} src={GoogleIcon} alt="Logo do Google" />
                        <Image className={styles.icon} src={AppleIcon} alt="Logo da Apple" />
                    </div>
                </div>
                <Button action={handleCheck} props="Log In" />
                {match !== null && <p>{error}</p>}{""}
            </div>
            </div>
        </main>
    );
}