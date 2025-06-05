"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/OnlineContacts.module.css";

export default function OnlineContacts() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users`);
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
                <div className={styles.avatars}>
                    {users.slice(0, 5).map((user) => (
                        <div key={user.id} className={styles.avatar}>
                            <img
                                src={
                                    user.photo
                                        ? `${process.env.NEXT_PUBLIC_API_URL}comments/${user.photo}`
                                        : "/icons/ongrayuser-icon.png"
                                }
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
                    ))}
                </div>
            </div>
    );
}