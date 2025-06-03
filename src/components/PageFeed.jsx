"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/PageFeed.module.css";
import Image from "next/image";
import axios from "axios";

export default function Feed() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.trim()) {
                fetchUsers(search);
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [search]);

    const fetchUsers = async (query) => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}users?search=${query}`,
                {
                    headers: {
                        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                    },
                }
            );
            setResults(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            setResults([]);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Image
                    className={styles.iconInput}
                    src="/icons/lupa.png"
                    alt="Ícone de Lupa"
                    width={16}
                    height={16}
                />
            </div>

            {/* RESULTADOS DA BUSCA */}
            {results.length > 0 && (
                <ul className={styles.resultsList}>
                    {results.map((user) => (
                        <li key={user.id} className={styles.resultItem}>
                            <Image
                                src={
                                    user.user_photo
                                        ? `${process.env.NEXT_PUBLIC_IMG_URL}${user.user_photo}.jpg`
                                        : "/icons/220.svg"
                                }
                                alt={`Foto de ${user.user_name}`}
                                width={32}
                                height={32}
                                className={styles.avatar}
                            />
                            <span>@{user.user_name}</span>
                        </li>
                    ))}
                </ul>
            )}

            <div className={styles.sections}>
                <ul className={styles.links}>
                    <li>
                        <a className={styles.list} href="/Dresses">
                            <Image
                                src="/icons/dress.png"
                                alt="Imagem da seção de vestidos"
                                width={40}
                                height={40}
                            />
                            <span>Dress</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Hats">
                            <Image
                                src="/icons/hat.png"
                                alt="Imagem da seção de chapéus"
                                width={40}
                                height={40}
                            />
                            <span>Hat</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Shoes">
                            <Image
                                src="/icons/shoes.png"
                                alt="Imagem da seção de sapatos"
                                width={40}
                                height={40}
                            />
                            <span>Shoes</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Makeup">
                            <Image
                                src="/icons/makeup.png"
                                alt="Imagem da seção de maquiagens"
                                width={40}
                                height={40}
                            />
                            <span>Make Up</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.list} href="/Jewelry">
                            <Image
                                src="/icons/jewelry.png"
                                alt="Imagem da seção de joias"
                                width={40}
                                height={40}
                            />
                            <span>Jewelry</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
