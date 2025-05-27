import React from "react";
import styles from "../styles/RecentContacts.module.css";

const RecentContacts = () => {
    const contacts = [
        { name: "@username", msg: "Sent you a post from @cocojones", date: "24 Apr", unread: 2 },
        { name: "@username", msg: "Quais peças de roupas você mais...", date: "15 Apr" },
        { name: "@username", msg: "Comprei recentemente uma bota...", date: "31 Mar", unread: 1 },
        { name: "@username", msg: "Onde você compra seus sapatos?", date: "2 Feb" },
        { name: "@username", msg: "Hi There, Welcome to GlamSync! Sh...", date: "28 Jan" },
    ];

    return (
        <div className={styles.container}>
            <h3>Recent Contacts</h3>
            <ul className={styles.list}>
                {contacts.map((c, i) => (
                    <li key={i} className={styles.contact}>
                        <div className={styles.info}>
                            <div className={styles.avatar}></div>
                            <div>
                                <strong>{c.name}</strong>
                                <p>{c.msg}</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <span>{c.date}</span>
                            {c.unread && (
                                <div className={styles.badgeContainer}>
                                    <div className={styles.badge}>{c.unread}</div>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentContacts;