import React from "react";
import styles from "../styles/OnlineContacts.module.css";

const OnlineContacts = () => {
    const contacts = [
        { username: "@username", image: "/icons/ongrayuser-icon.png" },
        { username: "@username", image: "/icons/ongrayuser-icon.png" },
        { username: "@username", image: "/icons/ongrayuser-icon.png" },
        { username: "@username", image: "/icons/ongrayuser-icon.png"},
        { username: "@username", image: "/icons/ongrayuser-icon.png" },
    ];

    return (
        <div className={styles.container}>
            <h3>
                Online Contacts <span className={styles.onlineDot}></span>
            </h3>
            <div className={styles.avatars}>
                {contacts.map((contact, i) => (
                    <div key={i} className={styles.avatar}>
                        <img
                            src={contact.image}
                            alt={`Avatar of ${contact.username}`}
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <span>{contact.username}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineContacts;