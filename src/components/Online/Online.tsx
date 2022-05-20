import React from 'react';
import { IUser } from '../../dummyData';
import styles from './Online.module.css';

interface OnlineProps {
  user: IUser;
}

function Online({ user }: OnlineProps): JSX.Element {
  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileImgContainer}>
        <img className={styles.rightbarProfileImg} src={user.profilePicture} alt="avatar" />
        <span className={styles.rightbarOnline} />
      </div>
      <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
  );
}

export default Online;
