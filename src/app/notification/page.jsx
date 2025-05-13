import React from "react";
import styles from "../../styles/notification.module.css";
import NotificationItem from "../../components/NotificationItem";
import SuggestionItem from "../../components/SuggestionItem";

const Notification = () => {
    const notifications = [
        ["@username and more 2", "Started following you.", "Today"],
        ["@username and more 40", "Liked your post.", "Today"],
        ["@username", "Mentioned you on their post.", "Today"],
        ["@username", "Started following you.", "Yesterday"],
        ["@username", "Started following you.", "28 Apr"],
        ["@username and more 22", "Liked your post.", "31 Mar"],
    ];

    const suggestions = [
        ["@mileycyrus", "followed by _.x.job"],
        ["@cynthiaerivo", "followed by fernfj"],
        ["@zendaya", "followed by user0908"],
        ["@sia", "followed by user0908"],
        ["@taylorswift", "followed by user0908"],
        ["@dualipa", "followed by user0908"],
    ];

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.backButton}>←</div>
                    <div className={styles.logo}>GlamSync</div>
                    <div className={styles.menu}>•••</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.notifications}>
                        <h2 className={styles.title}>Notifications Center</h2>
                        <div>
                            {notifications.map(([user, action, date], i) => (
                                <NotificationItem
                                    key={i}
                                    user={user}
                                    action={action}
                                    date={date}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.suggestions}>
                        <h2 className={styles.title}>Suggestions for you</h2>
                        <div>
                            {suggestions.map(([username, text], i) => (
                                <SuggestionItem
                                    key={i}
                                    username={username}
                                    text={text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;