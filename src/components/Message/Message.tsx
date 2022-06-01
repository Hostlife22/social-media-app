import cn from 'classnames';
import React from 'react';
import { format } from 'timeago.js';
import { IMessageProps } from './Message.interface';
import styles from './Message.module.css';

function Message({ own, message }: IMessageProps): JSX.Element {
  return (
    <div className={cn(styles.message, { [styles.own]: Boolean(own) })}>
      <div className={styles.messageTop}>
        <img src="../assets/person/1.jpeg" alt="img" className={styles.messageImg} />
        <p className={styles.messageText}>{message.text}</p>
      </div>
      <div className={styles.messageBottom}>{format(message.createdAt)}</div>
    </div>
  );
}

export default Message;
