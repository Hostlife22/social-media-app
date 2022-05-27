import React from 'react';
import { IUser } from '../../dummyData';
import styles from './Friend.module.css';

interface FriendProps {
  user: IUser;
}

function Friend({ user }: FriendProps): JSX.Element {
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;
  return (
    <li className={styles.sidebarFriend}>
      <img className={styles.sidebarFriendImg} src={PF + user.profilePicture} alt="avatar" />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}

export default Friend;
