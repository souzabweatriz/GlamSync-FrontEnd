import React from "react";
import Header from "../../components/Header";
import chatHeader from "../../styles/chatHeader.module.css";
import styles from "../../styles/chats.module.css";
import ChatMessage from "../../components/ChatMessage";
import ChatInput from "../../components/ChatInput";
import Image from "next/image";


export default function ChatPage() {
    return (
        <div className={styles["chat-gb"]}>
            <Header />
            <div className={chatHeader.top}>
                <button className={chatHeader.back}>
                    <Image src="/icons/back-icon.png" alt="Voltar" width={39} height={39} />
                </button>
                <span className={chatHeader.user}>
                    <Image src="/icons/users.png" alt="Usuário" width={24} height={22} className={chatHeader.icon} />
                    @username
                    <Image
                        src="/icons/info-icon.png"
                        alt="Informação"
                        width={29}
                        height={29}
                        className={chatHeader.infoIcon}
                    />                </span>
            </div>
            <div className={styles["chat-body"]}>
                <ChatMessage text="Ei! Você viu o novo Work Shop que a Dolce Gabbana está fazendo agora? Tá muito legal!" time="16:00" />
                <ChatMessage
                    own text="Não vi! Vou entrar lá agora mesmo! Adoro essa marca!!" time="16:05" />
                <ChatMessage
                    post={{
                        text: "Olha só esse post que a @cocojones acabou de fazer!"
                    }}
                    time="17:00"
                />
                <ChatMessage
                    post={{
                        user: "@cocojones",
                        img: "/media/COCOJONES.png"
                    }}
                    time="17:01"
                />
            </div>
            <ChatInput />
        </div>
    );
}