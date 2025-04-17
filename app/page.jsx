"use client";
import styles from "../styles/page.module.css"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"
import florgif from "../public/florgif.gif"

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, [router]);
	
return (
  <main className={styles.redirector}>
  <div className={styles.text}>
      <p className={styles.description}>Você está sendo redirecionado...</p>
  </div>
  <Image
  className={styles.gif}
  src={florgif}
  alt="gif de flor rosa girando"
  />
  </main>
);
}
