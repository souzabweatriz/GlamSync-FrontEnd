"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./signUp.module.css"; 
import { useState } from "react";
import Link from 'next/link';

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
                <Link href="/initial">
                    <Image className={styles.back_icon} src="/icons/back-icon.png" alt="icon de voltar"  width={32} height={32} />
                    </Link>
                </div>
                <div className={styles.text}>
                    <h1>Sign Up</h1>
                    <h2>Create your new acount</h2>
                </div>
            </div>
            <div className={styles.main}> 
                <div className={styles.inputs}>
                    <div className={styles.input}>
                    <Image className={styles.icon} src="/icons/UserIcon.png" alt="icon rosa de usuário" width={32} height={32}/>
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className={styles.input}>
                        <Image className={styles.icon} src="/icons/email-icon.png" alt="Icon de Email" width={32} height={32}/>
                        <input type="text" placeholder="yourname@gmail.com" />
                    </div>
                    <div className={styles.input}>
                        <Image className={styles.icon} src="/icons/iconsTelefone.png" alt="Icon de Email" width={32} height={32} />
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
                        <input type="text" placeholder="Phone number" />
                    </div>
                    <div className={styles.input}>
                    <Image className={styles.icon} src="/icons/PadlockIcon.png" alt="Cadeado rosa de senha"  width={32} height={32}/>
                        <input type= {showPassword ? "text": "password"} 
                        placeholder="Password"/>
                        <img className={styles.eye_icon} src={showPassword ? "/icons/iconEye.png" : "/icons/olho.png"} alt="" onClick={togglePasswordVisibility} /> {/* responsável por exibir ou esconder a senha quando clicar} */}
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
                        <Image className={styles.icon} src="/icons/GoogleIcon.png" alt="Logo do Google" width={32} height={32}/>
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