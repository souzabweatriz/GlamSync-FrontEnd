import React from 'react';
import styles from '../../styles/messages.module.css';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import OnlineContacts from '../../components/OnlineContacts';
import RecentContacts from '../../components/RecentContacts';

const MessagesPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2>Messages</h2>
                <SearchBar />
                <div className={styles.content}>
                    <OnlineContacts />
                    <RecentContacts />
                </div>
            </div>
        </>
    );
};

export default MessagesPage;