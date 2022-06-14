import { IUser } from '../../dummyData';
import styles from './Online.module.css';

interface OnlineProps {
  user: IUser;
}

function Online({ user }: OnlineProps): JSX.Element {
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;
  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileImgContainer}>
        <img className={styles.rightbarProfileImg} src={PF + user.profilePicture} alt="avatar" />
        <span className={styles.rightbarOnline} />
      </div>
      <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
  );
}

export default Online;
