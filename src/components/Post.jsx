"use client"
import styles from "../styles/Post.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Post() {

    const [showFollowing, setFollowing] = useState(false); 

    const handleFollow = () => {
        setFollowing((prev) => !prev);
      };

    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Feed</h1>
        <div className={styles.post}>
            <Image src="/user.png" alt="ícone de usuário na cor marrom" width={30} height={30} />
            <p className={styles.user}>@username</p>
            <button className={styles.followBtn} onClick={handleFollow}>
            {showFollowing ? (
            <>
              Following
              <span className={styles.following}></span>
            </>
          ) : (
            <>
              Follow
              <span className={styles.plus}>+</span>
            </>
          )}
            </button>  
        </div>
            <Image 
            className={styles.image}
            src="/gato.jpg"
            alt="Imagem do Post"
            width={500}
            height={500}
            />
            <div className={styles.aside}>
                <h1 className={styles.title}>Comments</h1>
                
            </div>
    </div>
    )
}