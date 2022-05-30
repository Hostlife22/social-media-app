import React from 'react';
import styles from './ChatOnline.module.css';

function ChatOnline() {
  return (
    <div className={styles.chatOnline}>
      <div className={styles.chatOnlineFriend}>
        <div className={styles.chatOnlineImgContainer}>
          <img src="../assets/person/1.jpeg" alt="avatar" className={styles.chatOnlineImg} />
          <div className={styles.chatOnlineBadge} />
        </div>
        <span className={styles.chatOnlineName}>John Doe</span>
      </div>
    </div>
  );
}

export default ChatOnline;
