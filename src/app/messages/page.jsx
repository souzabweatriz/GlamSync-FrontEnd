"use client";

import React from 'react';
import styles from '../../styles/messages.module.css';
import Header from '../../components/Header';
import OnlineContacts from '../../components/OnlineContacts';
import lupaIcon from "../../../public/icons/lupa.png";
import backIcon from "../../../public/icons/back-icon.png";
import Image from 'next/image';
import Chat from '../../components/Chat';
import Link from 'next/link';
import AddUser from '../../components/AddUser';

const MessagesPage = () => {
    return (
        <div className={styles.body}>
            <Header />
            <div className={styles.container}>
                 <AddUser />
                <div className={styles.botao}>
                    <Link href="/Feed">
                        <Image src={backIcon} alt="Voltar Pro feed" width={44} height={44} />
                    </Link>
                </div>

                <div className={styles.header}>
                    <h2>Messages</h2>
                </div>
                <div className={styles.grid}>
                    {/* OnlineContacts e Chat lado a lado */}
                    <div>
                        <OnlineContacts />
                    </div>
                    <div>
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;
