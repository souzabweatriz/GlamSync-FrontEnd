"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../styles/Chat.module.css";
import { Pagination } from "antd";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

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
                const { data: chats } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_KEY}chat`,
                    {
                        headers: HEADERS
                    }
                );
                setData({
                    chats,
                    loading: false,
                    current: 1,
                    pageSize: 5,
                });
            } catch {
                toast.error("Erro ao carregar");
                setData({
                    chats: [],
                    loading: false,
                    current: 1,
                    pageSize: 5,
                });
            }
        };
        fetchChats();
    }, []);

    function paginatedChats() {
        const start = (data.current - 1) * data.pageSize;
        return data.chats.slice(start, start + data.pageSize);
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <h1>Chat</h1>
            {data.loading ? (
                <Image
                    src="/media/Flor.png"
                    width={100}
                    height={100}
                    alt="Loading"
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
                            setData({ ...data, current: page, pageSize })
                        }
                    />
                </>
            )}
        </div>
    )
}