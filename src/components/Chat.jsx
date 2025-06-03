"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../styles/Chat.module.css";
import { Pagination } from "antd";

export default function Chat() {
  const [data, setData] = useState({
    chats: [],
    loading: true,
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    const fetchChats = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      if (!apiUrl || !apiKey) {
        toast.error("Variáveis de ambiente não configuradas.");
        console.error("Verifique .env.local: faltando API_URL ou API_KEY.");
        setData((prev) => ({ ...prev, loading: false }));
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}chat`, {
          headers: { "x-api-key": apiKey },
        });

        if (!Array.isArray(response.data)) {
          throw new Error("Resposta inesperada da API: esperado um array.");
        }

        setData((prev) => ({
          ...prev,
          chats: response.data,
          loading: false,
        }));
      } catch (error) {
        console.error("Erro ao carregar chats:", error);
        toast.error("Erro ao carregar chats.");
        setData((prev) => ({
          ...prev,
          chats: [],
          loading: false,
        }));
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
            {paginatedChats().map((chat) => (
              <div key={chat.id} className={styles.chatItem}>
                <Image
                  className={styles.image}
                  src={chat.user?.avatar || "/media/Flor.png"}
                  alt="Avatar"
                  width={50}
                  height={50}
                />
                <div className={styles.chatInfo}>
                  <h2>{chat.user?.name || "Usuário"}</h2>
                  <p>{chat.lastMessage || "Sem mensagens"}</p>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            current={data.current}
            pageSize={data.pageSize}
            total={data.chats.length}
            onChange={(page, pageSize) =>
              setData((prev) => ({
                ...prev,
                current: page,
                pageSize,
              }))
            }
          />
        </>
      )}
    </div>
  );
}
