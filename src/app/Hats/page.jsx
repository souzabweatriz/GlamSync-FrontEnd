import React from "react";
import styles from "../Hats/hat.module.css"
import Header from "../../components/Header";
import Post from "../../components/Post";
import PageFeed from "../../components/PageFeed"

export default function Hat() {
    return (
        <div className={styles.main}>
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
                <PageFeed />
                <Post
                    className={styles.post}
                    title={"Hats"}
                    rota={`${process.env.NEXT_PUBLIC_API_URL}posts?categorie_id=2`}
                />
            </div>
        </div>
    );
}
