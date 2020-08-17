import React from 'react';
import styles from './notification.module.css';

export default function Notification({message}) {
    return (
        <div>
            <p className={styles.Notification}>{message}</p>
        </div>
    );
}
