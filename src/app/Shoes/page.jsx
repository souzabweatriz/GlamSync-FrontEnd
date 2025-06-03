import React from "react";
import styles from "./Shoes.module.css";
import Header from "../../components/Header";
import Post from "../../components/Post";
export default function Shoes() {
    return (
        <div>
            <div className={styles.header}>
                <Header
                    ImageProps={{
                        src: "/flower.png",
                        alt: "icon de voltar",
                        width: 50,
                        height: 50,
                    }}
                />
            </div>
            <div className={styles.container}>
                <Post
                    className={styles.post}
                    title={"Shoes"}
                    rota={`${process.env.NEXT_PUBLIC_API_URL}posts`}
                />
            </div>
        </div>
    );
}
