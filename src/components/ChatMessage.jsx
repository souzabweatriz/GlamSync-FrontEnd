import React from 'react';
import Image from 'next/image';
import styles from '../styles/chats.module.css';

export default function ChatMessage({ own, text, time, post }) {
    return (
        <div className={`${styles["chat-message"]} ${own ? styles["own"] : ""}`}>
            <div className={styles["chat-bubble"]}>
                {post ? ( //se tiver um post, ele mostra. Se n tiver, mostra somente o texto normal da msg
                    <>
                        <div className={styles["post-text"]}>{post.text}</div>
                        <div className={styles["post-user"]}>{post.user}</div>
                        <div className={styles["post-img"]}>
                            <Image
                                src={post.img}
                                alt="post"
                                width={260}
                                height={260}
                                style={{ borderRadius: "12px", objectFit: "cover" }}
                            />
                        </div>
                        <span className={styles["chat-time"]}>{time}</span>
                    </>
                ) : (
                    <>
                        {text}
                        <span className={styles["chat-time"]}>{time}</span>
                    </>
                )}
            </div>
        </div>
    );
}