import cn from 'classnames';
import React from 'react';
import { IMessageProps } from './Message.interface';
import styles from './Message.module.css';

function Message({ own }: IMessageProps): JSX.Element {
  return (
    <div className={cn(styles.message, { [styles.own]: Boolean(own) })}>
      <div className={styles.messageTop}>
        <img src="../assets/person/1.jpeg" alt="img" className={styles.messageImg} />
        <p className={styles.messageText}>Hello this is a message</p>
      </div>
      <div className={styles.messageBottom}>1 hour</div>
    </div>
  );
}

export default Message;
