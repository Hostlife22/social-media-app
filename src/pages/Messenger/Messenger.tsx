import React from 'react';
import { ChatOnline, Conversation, Message, Topbar } from '../../components';
import styles from './Messenger.module.css';

function Messenger() {
  return (
    <>
      <Topbar />
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input placeholder="Search for friends" type="text" className={styles.chatMenuInput} />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            <div className={styles.chatBoxTop}>
              <Message />
              <Message own />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className={styles.chatBoxBottom}>
              <textarea className={styles.chatMessageinput} placeholder="write something..." />
              <button className={styles.chatSubmitButton}>Send</button>
            </div>
          </div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
