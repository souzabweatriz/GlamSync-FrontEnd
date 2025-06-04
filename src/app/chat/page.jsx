import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/chats.module.css";
import Image from "next/image";

export default function ChatPage() {
    return (
        <div className="chat-gb">
            <Header />
            <div className="chat-body">
                <div className="chat-message">
                    <div className="chat-bubble">
                        Ei! Você viu o novo Work Shop que a Dolce Gabbana está fazendo agora? Tá muito legal!
                        <span className="chat-time">16:00</span>
                    </div>
                </div>

                <div className="chat-message own">
                    <div className="chat-bubble">
                        Não vi! Vou entrar lá agora mesmo! Adoro essa marca!!
                        <span className="chat-time">16:05</span>
                    </div>
                </div>

                <div className="chat-message">
                    <div className="chat-bubble">
                        <div className="post-text">
                            Olha só esse post que a @cocojones acabou de fazer!</div>
                        <div className="post-img">
                            <Image
                                src="/media/cocoJones.jpg"
                                alt="post"
                                width={260}
                                height={200}
                                style={{ borderRadius: "12px", objectFit: "cover" }}
                            />
                        </div>
                        <span className="chat-time">17:01</span>
                    </div>
                </div>
            </div>
        </div>
    )
}