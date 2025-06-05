"use client"

import React, { useState } from 'react';
import styles from '../styles/chats.module.css';
import { MdSend } from "react-icons/md";

export default function ChatInput() {
    const [mensagem, setMensagem] = useState("");

    function enviarMensagem() {
        if (mensagem.trim() !== "") {
            alert("Mensagem enviada: " + mensagem);
            setMensagem("");
        }
    }

    return (
        <div className={styles["chat-input-container"]}>
            <input
                className={styles["chat-input"]}
                placeholder='Digite uma mensagem...'
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
            />
            <button className={styles["send-btn"]} onClick={enviarMensagem}>
                <MdSend />
            </button>
        </div>
    );
}