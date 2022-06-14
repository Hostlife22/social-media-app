import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from '../Post/Post.interface';
import { IConversationProps } from './Conversation.interface';
import styles from './Conversation.module.css';

function Conversation({ conversation, currentUser }: IConversationProps): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser?._id);

    const getUser = async () => {
      try {
        const res = await axios.get<IUser>(`/api/users?userId=${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className={styles.conversation}>
      <img
        className={styles.conversationImg}
        src={user?.coverPicture ? PF + user.coverPicture : `${PF}person/noAvatar.png`}
        alt="img"
      />
      <span className={styles.conversationName}>{user?.username}</span>
    </div>
  );
}

export default Conversation;
