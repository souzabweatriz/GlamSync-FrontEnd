import React from "react";
import styles from "../Makeup/makeup.module.css";
import Header from "../../components/Header";
import Post from "../../components/Post";
import PageFeed from "../../components/PageFeed"

export default function Makeup() {
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
                    title={"MakeUp"}
                    rota={`${process.env.NEXT_PUBLIC_API_URL}posts?categorie_id=4`}
                />
            </div>
        </div>
    );
}
