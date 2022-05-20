import React from 'react';
import { IUser } from '../../dummyData';
import styles from './Friend.module.css';

interface FriendProps {
  user: IUser;
}

function Friend({ user }: FriendProps): JSX.Element {
  return (
    <li className={styles.sidebarFriend}>
      <img className={styles.sidebarFriendImg} src={user.profilePicture} alt="avatar" />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}

export default Friend;
