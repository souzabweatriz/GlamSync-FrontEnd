import React from 'react';
import Image from 'next/image';
import styles from '../styles/chats.module.css';

export default function ChatMessage({ own, text, time, post }) {
    return (
        <div className={`${styles["chat-message"]} ${own ? styles["own"] : ""}`}>
            <div className={styles["chat-bubble"]}>
                {post ? (
                    <>
                        {/* Mostra o texto do post, se existir */}
                        {post.text && (
                            <div className={styles["post-text"]}>{post.text}</div>
                        )}
                        {/* Mostra o usuário do post, se existir */}
                        {post.user && (
                            <div className={styles["post-user"]}>{post.user}</div>
                        )}
                        {/* Mostra a imagem do post, se existir */}
                        {post.img && (
                            <div className={styles["post-img"]}>
                                <Image
                                    src={post.img}
                                    alt="post"
                                    width={260}
                                    height={260}
                                    style={{ borderRadius: "12px", objectFit: "cover" }}
                                />
                            </div>
                        )}
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