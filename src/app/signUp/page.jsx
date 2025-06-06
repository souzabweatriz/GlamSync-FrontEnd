"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./signUp.module.css";
import { useState } from "react";

export default function SignUp() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <button className={styles.backButton} onClick={() => router.push("/initial")}>
                        <Image src="/icons/back-icon.png" alt="icon de voltar" width={32} height={32} />
                    </button>
                    <h1 className={styles.title}>Sing Up</h1>
                    <h2 className={styles.subtitle}>Create your new account</h2>
                </div>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <Image className={styles.inputIcon} src="/icons/UserIcon.png" alt="Usuário" width={24} height={24} />
                        <input className={styles.input} type="text" placeholder="Full Name" />
                    </div>
                    <div className={styles.inputGroup}>
                        <Image className={styles.inputIcon} src="/icons/email-icon.png" alt="Email" width={24} height={24} />
                        <input className={styles.input} type="text" placeholder="yourname@gmail.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <Image className={styles.inputIcon} src="/icons/iconsTelefone.png" alt="Telefone" width={24} height={24} />
                        <div className={styles.phoneGroup}>
                            <select className={styles.ddd}>
                                <option value="+11">+11 (SP)</option>
                                <option value="+21">+21 (RJ)</option>
                                <option value="+61">+61 (DF)</option>
                                <option value="+51">+51 (RS)</option>
                                <option value="+31">+31 (MG)</option>
                                <option value="+41">+41 (PR)</option>
                                <option value="+51">+51 (SC)</option>
                                <option value="+71">+71 (BA)</option>
                                <option value="+41">+41 (PE)</option>
                                <option value="+62">+62 (GO)</option>
                                <option value="+62">+62 (MS)</option>
                                <option value="+84">+84 (RN)</option>
                                <option value="+85">+85 (CE)</option>
                                <option value="+19">+19 (SP)</option>
                                <option value="+62">+62 (MT)</option>
                                <option value="+32">+32 (ES)</option>
                                <option value="+68">+68 (AC)</option>
                                <option value="+91">+91 (AP)</option>
                                <option value="+92">+92 (AM)</option>
                                <option value="+93">+93 (PA)</option>
                                <option value="+99">+99 (RO)</option>
                                <option value="+98">+98 (RR)</option>
                                <option value="+97">+97 (TO)</option>
                                <option value="+79">+79 (SE)</option>
                                <option value="+98">+98 (PI)</option>
                                <option value="+1">+1 (US)</option>
                                <option value="+55">+55 (BR)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (IN)</option>
                                <option value="+81">+81 (JP)</option>
                                <option value="+33">+33 (FR)</option>
                            </select>
                            <input className={styles.phoneInput} type="text" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <Image className={styles.inputIcon} src="/icons/PadlockIcon.png" alt="Senha" width={24} height={24} />
                        <input
                            className={styles.input}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />
                        <img
                            className={styles.eyeIcon}
                            src={showPassword ? "/icons/iconEye.png" : "/icons/olho.png"}
                            alt="Mostrar senha"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <button className={styles.signUpBtn} type="submit">Sign Up</button>
                    <label className={styles.check}>
                        <input
                            className={styles.checkbox}
                            type="checkbox" checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className={styles.checkCustom}></span>
                        <p className={styles.description}>Remember Me</p>
                    </label>
                    <div className={styles.dividerArea}>
                        <div className={styles.divider}></div>
                        <span className={styles.orText}>Or continue with</span>
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.socialIcons}>
                        <Image src="/icons/GoogleIcon.png" alt="Google" width={32} height={32} />
                        <Image src="/icons/AppleIcon.png" alt="Apple" width={32} height={32} />
                    </div>
                </form>
                <div className={styles.loginArea}>
                    <span>Already have an account?</span>
                    <span
                        className={styles.loginLink}
                        onClick={() => router.push("/signIn")}
                    > Log in</span>
                </div>
            </div>
        </div>
    );
}