"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../styles/Chat.module.css";

export default function Chat() {
  const [data, setData] = useState({
    chats: [],
    loading: true,
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}chat`);
        const chats = Array.isArray(res.data)
          ? res.data
          : res.data.chats || [];

        setData((prev) => ({
          ...prev,
          chats,
          loading: false,
        }));
      } catch (error) {
        console.error("Erro ao carregar as conversas:", error);
        toast.error("Erro ao carregar as conversas.");
        setData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchChats();
  }, []);

  const paginatedChats = () => {
    const start = (data.current - 1) * data.pageSize;
    const end = start + data.pageSize;
    return data.chats.slice(start, end);
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h1>Chat</h1>

      {data.loading ? (
        <Image
          src="/media/Flor.png"
          width={100}
          height={100}
          alt="Carregando"
        />
      ) : (
        <>
          <div className={styles.chatList}>
            {paginatedChats().map((chat) => {
              const userPhoto = chat.user_photo;
              const imgSrc = userPhoto
                ? userPhoto.startsWith("5a9acfba") // Exemplo para diferenciar se precisa /media ou /users (ajuste se necessário)
                  ? `${process.env.NEXT_PUBLIC_API_URL}api/media/${userPhoto}`
                  : `${process.env.NEXT_PUBLIC_API_URL}api/users/${userPhoto}`
                : "/media/Flor.png";

              return (
                <div key={chat.id} className={styles.chatItem}>
                  <Image
                    className={styles.image}
                    src="/icons/comments.png"
                    alt="Avatar"
                    width={50}
                    height={50}
                    onError={(e) => {
                      e.currentTarget.src = "/media/Flor.png";
                    }}
                  />
                  <div className={styles.chatInfo}>
                    
                    <h2>{chat.user_name || "Usuário"}</h2>
                    <p>{chat.message || "Sem mensagens"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}