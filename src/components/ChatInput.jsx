import React from   'react';
import styles from '../styles/chats.module.css';

export default function ChatInput() {
    return (
        <div className={styles["chat-input-container"]}>
            <input className={styles["chat-input"]} placeholder='Digite uma mensagem...' />
            <button className={styles["send-btn"]}>
                <span>➤</span>
            </button>
        </div>
    );
}