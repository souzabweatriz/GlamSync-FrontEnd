import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/chats.module.css";
import ChatMessage from "../../components/ChatMessage";
import ChatInput from "../../components/ChatInput";


export default function ChatPage() {
    return (
        <div className={styles["chat-gb"]}>
            <Header />
            <div className={styles["chat-body"]}>
                <ChatMessage text="Ei! Você viu o novo Work Shop que a Dolce Gabbana está fazendo agora? Tá muito legal!" time="16:00" />
                <ChatMessage
                    own text="Não vi! Vou entrar lá agora mesmo! Adoro essa marca!!" time="16:05" />
                <ChatMessage
                    post={{
                        text: "Olha só esse post que a @cocojones acabou de fazer!"
                    }}
                    time="17:01"
                />
                <ChatMessage
                    post={{
                        user: "@cocojones",
                        img: "/media/cocoJones.jpg"
                    }}
                    time="17:02"
                />
            </div>
            <ChatInput />
        </div>
    );
}