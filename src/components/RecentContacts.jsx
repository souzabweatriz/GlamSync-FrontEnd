import React from "react";
import styles from "../styles/RecentContacts.module.css";

const RecentContacts = () => {
    const contacts = [
        { msg: "Sent you a post from @cocojones", date: "24 Apr" },
        { msg: "Quais peças de roupas você mais...", date: "15 Apr" },
        { msg: "Comprei recentemente uma bota...", date: "31 Mar" },
        { msg: "Onde você compra seus sapatos?", date: "2 Feb" },
        { msg: "Hi There, Welcome to GlamSync! Sh...", date: "28 Jan" },
    ];

    return (
        <div className={styles.box}>
            <h3>Recent Contacts</h3>
            {contacts.map((item, i) => (
                <div key={i} className={styles.contact}>
                    <div className={styles.avatar}></div>
                    <div className={styles.details}>
                        <p>@username</p>
                        <span>{item.msg}</span>
                    </div>
                    <div className={styles.meta}>
                        <p>{item.date}</p>
                        <div className={styles.dot}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentContacts;