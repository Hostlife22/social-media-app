import React from 'react';
import styles from './Conversation.module.css';

function Conversation() {
  return (
    <div className={styles.conversation}>
      <img className={styles.conversationImg} src="../assets/person/1.jpeg" alt="img" />
      <span className={styles.conversationName}>John DOe</span>
    </div>
  );
}

export default Conversation;
