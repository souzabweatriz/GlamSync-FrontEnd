import React from "react";
import styles from "../styles/RecentContacts.module.css";
import Image from "next/image";

const RecentContacts = () => {
    const contacts = [
        { name: "@username", image: "/icons/ongrayuser-icon.png", msg: "Sent you a post from @cocojones", date: "24 Apr", unread: 2 },
        { name: "@username", image: "/icons/ongrayuser-icon.png", msg: "Quais peças de roupas você mais...", date: "15 Apr" },
        { name: "@username", image: "/icons/ongrayuser-icon.png", msg: "Comprei recentemente uma bota...", date: "31 Mar", unread: 1 },
        { name: "@username", image: "/icons/ongrayuser-icon.png", msg: "Onde você compra seus sapatos?", date: "2 Feb" },
        { name: "@username", image: "/icons/ongrayuser-icon.png", msg: "Hi There, Welcome to GlamSync! Sh...", date: "28 Jan" },
    ];

    return (
        <div className={styles.container}>
            <h3>Recent Contacts</h3>
            <ul className={styles.list}>
                {contacts.map((c, i) => (
                    <li key={i} className={styles.contact}>
                        <div className={styles.info}>
                            <Image src={c.image} alt={'Avatar of ${c.name}'} width={50} height={50} className={styles.avatar}></Image>
                            <div>
                                <strong>{c.name}</strong>
                                <p>{c.msg}</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <span>{c.date}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentContacts;