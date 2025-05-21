import React from "react";
import styles from "../styles/PageFeed.module.css";
import Image from "next/image";

export default function Feed() {
    return (
        <div className={styles.main}>
            <div className={styles.input}>
                <Image
                    className={styles.lupa}
                    src="/icons/lupa.png"
                    alt="Ícone de Lupa"
                    width={24}
                    height={24}
                />
                <input className={styles.text} type="text" placeholder="Search..." />
            </div>

            <div className={styles.sections}>
                <ul className={styles.links}>
                    <li>
                        <a className={styles.list} href="/Dresses">
                            <Image
                                src="/icons/dress.png"
                                alt="Imagem da seção de vestidos"
                                width={40}
                                height={40}
                            />
                            <span>Dress</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Hats">
                            <Image
                                src="/icons/hat.png"
                                alt="Imagem da seção de chapéus"
                                width={40}
                                height={40}
                            />
                            <span>Hat</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Shoes">
                            <Image
                                src="/icons/shoes.png"
                                alt="Imagem da seção de sapatos"
                                width={40}
                                height={40}
                            />
                            <span>Shoes</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Makeup">
                            <Image
                                src="/icons/makeup.png"
                                alt="Imagem da seção de maquiagens"
                                width={40}
                                height={40}
                            />
                            <span>Make Up</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Jewelry">
                            <Image
                                src="/icons/jewelry.png"
                                alt="Imagem da seção de joias"
                                width={40}
                                height={40}
                            />
                            <span>Jewelry</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
