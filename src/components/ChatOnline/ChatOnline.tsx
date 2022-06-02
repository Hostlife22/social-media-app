import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IConversations } from '../../pages/Messenger/Messenger.interface';
import { IChatFriend, IChatOnlineProps } from './ChatOnline.interface';
import styles from './ChatOnline.module.css';

function ChatOnline({ onlineUsers, currentId, setCurrentChat }: IChatOnlineProps) {
  const [friends, setFriends] = useState<IChatFriend[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<IChatFriend[]>([]);
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get<IChatFriend[]>(`/api/users/friends/${currentId}`);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers?.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user: IChatFriend) => {
    try {
      const res = await axios.get<IConversations>(
        `/api/conversations/find/${currentId}/${user._id}`,
      );

      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.chatOnline}>
      {onlineFriends.map((o) => (
        <div className={styles.chatOnlineFriend} key={o._id} onClick={() => handleClick(o)}>
          <div className={styles.chatOnlineImgContainer}>
            <img
              src={o?.profilePicture ? PF + o.profilePicture : `${PF}person/noAvatar.png`}
              alt="avatar"
              className={styles.chatOnlineImg}
            />
            <div className={styles.chatOnlineBadge} />
          </div>
          <span className={styles.chatOnlineName}>{o.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatOnline;
