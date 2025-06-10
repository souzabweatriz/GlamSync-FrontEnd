"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/OnlineContacts.module.css";

const HEADERS = { headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY } };

export default function OnlineContacts() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}users`,
                    HEADERS
                );
                const fetchedUsers = res.data.users || [];
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className={styles.container}>
            <h3>
                Online Contacts <span className={styles.onlineDot}></span>
            </h3>
            <div className={styles.avatars}>
                {users.slice(0, 3).map((user) => {
                    const photoUrl = user.photo
                        ? `${process.env.NEXT_PUBLIC_API_URL}users/${user.photo}` // Ajuste o caminho aqui se for diferente
                        : "/icons/ongrayuser-icon.png";

                    console.log("URL da imagem:", photoUrl);

                    return (
                        <div key={user.id} className={styles.avatar}>
                            <img
                                src={photoUrl}
                                alt={`Avatar de ${user.username}`}
                                width={50}
                                height={50}
                                className={styles.image}
                                onError={(e) => {
                                    e.currentTarget.src = "/icons/ongrayuser-icon.png";
                                }}
                            />
                            <span>@{user.username}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
