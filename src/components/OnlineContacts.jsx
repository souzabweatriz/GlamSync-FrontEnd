import React from "react";
import styles from "../styles/OnlineContacts.module.css";

const OnlineContacts = () => {
    const contacts = Array (5).fill('@username');
    return (
        <div className={styles.container}>
            <h3>
                Online Contacts <span className={styles.onlineDot} ></span>
            </h3>
            <div className={styles.avatars}>
                {contacts.map((username, i) => (
                    <div key={i} className={styles.avatar}>
                        <div className={styles.image}></div>
                        <span>{username}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default OnlineContacts;