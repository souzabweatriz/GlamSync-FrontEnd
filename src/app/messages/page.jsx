import React from 'react';
import styles from '../../styles/messages.module.css';
import Header from '../../components/Header';
import OnlineContacts from '../../components/OnlineContacts';
import RecentContacts from '../../components/RecentContacts';
import lupaIcon from "../../../public/icons/lupa.png"
import Image from 'next/image';

const MessagesPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <h2>Messages</h2>
                <div className={styles.search}>
                <input type="text" placeholder="Search..." />
          <button>
            <Image src={lupaIcon} alt="Search" width={20} height={20} />
            </button>
                </div>
            </div>
            <div className={styles.grid}>
                <OnlineContacts />
                <RecentContacts />
            </div>
        </div>
    );
};

export default MessagesPage;