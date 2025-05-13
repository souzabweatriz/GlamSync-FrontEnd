import styles from "../initial/initial.module.css"
import Image from "next/image";

export default function Initial(){
    return(
        <main>
        <div className={styles.fundo}>
            <h1 className={styles.title}>Welcome!</h1>
        </div>
        <div className={styles.logo}></div>
        </main>

        
    )
}