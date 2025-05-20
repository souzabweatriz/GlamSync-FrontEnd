import React from "react";
import styles from "../styles/PageFeed.module.css";

export default function Feed(){
    return(
        <div className={styles.main}>
            <div className={styles.input}> 
            <Image 
            className={styles.lupa} 
            src="../icons/lupa.png" 
            alt="Ícone de Lupa" 
            width={50} 
            height={50} 
            />
            <input className={styles.text}
            type="text"
            placeholder="Search..." />
            </div>
            <div className={styles.sections}>
            <ul className={styles.links}>
                <li>
                    <Image src="../public/" alt="Imagem da seção de vestidos" />
                    <a className={styles.list} href="/Dresses" />
                </li>
                <li>
                    <Image src="../public/" alt="Imagem da seção de vestidos" />
                    <a className={styles.list} href="/Dresses" />
                </li>
                <li>
                    <Image src="../public/" alt="Imagem da seção de vestidos" />
                    <a className={styles.list} href="/Dresses" />
                </li>
                <li>
                    <Image src="../public/" alt="Imagem da seção de vestidos" />
                    <a className={styles.list} href="/Dresses" />
                </li>
                
            </ul>
            </div>
        </div>
    )
}