import React from "react";
import styles from "../styles/chats.module.css";

export default function ChatMessage({ text, own, post, time }) {
    return (
        <div className={`${styles["chat-message"]} ${own ? styles["own"] : ""}`}>
            <div className={styles["chat-bubble"]} style={{ position: "relative" }}>
                {text && <span>{text}</span>}
                {post && (
                    <div>
                        {post.text && <span>{post.text}</span>}
                        {post.user && (
                            <div>
                                <span>{post.user}</span>
                                {post.img && (
                                    <img
                                        src={post.img}
                                        alt={post.user}
                                        className={styles["coco-img"]}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                )}
                {time && <span className={styles["chat-time"]}>{time}</span>}
            </div>
        </div>
    );
}