import React from 'react';
import { Online } from '..';
import { Users } from '../../dummyData';
import { IUser } from '../Post/Post.interface';
import styles from './Rightbar.module.css';

interface IRightbarProps {
  user: IUser | null;
}
interface IProfileProps {
  user: IUser;
}

function HomeRightbar(): JSX.Element {
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;
  return (
    <>
      <div className={styles.birthdayContainer}>
        <img className={styles.birthdayImg} src={`${PF}gift.png`} alt="birthday" />
        <span className={styles.birthdayTextContent}>
          <strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today.
        </span>
      </div>
      <img className={styles.rightbarAd} src={`${PF}ad.png`} alt="ad" />
      <h4 className={styles.rightbarTitle}>Online Friends</h4>
      <ul className={styles.rightbarFriendList}>
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
}

function ProfileRightbar({ user }: IProfileProps): JSX.Element {
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;
  return (
    <>
      <h4 className={styles.rightbarTitle}>User information</h4>
      <div className={styles.rightbarInfo}>
        <div className={styles.rightbarInfoItem}>
          <span className={styles.rightbarInfoKey}>City:</span>
          <span className={styles.rightbarInfoValue}>{user.city}</span>
        </div>
        <div className={styles.rightbarInfoItem}>
          <span className={styles.rightbarInfoKey}>From:</span>
          <span className={styles.rightbarInfoValue}>{user.from}</span>
        </div>
        <div className={styles.rightbarInfoItem}>
          <span className={styles.rightbarInfoKey}>Relationship:</span>
          <span className={styles.rightbarInfoValue}>
            {user.relationship === 1 ? 'Single' : user.relationship === 1 ? 'Married' : '-'}
          </span>
        </div>
      </div>
      <h4 className={styles.rightbarTitle}>User friends</h4>
      <div className={styles.rightbarFollowings}>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src={`${PF}person/1.jpeg`} alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src={`${PF}person/2.jpeg`} alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src={`${PF}person/3.jpeg`} alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src={`${PF}person/4.jpeg`} alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src={`${PF}person/5.jpeg`} alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src="./assets/person/6.jpeg" alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
      </div>
    </>
  );
}

function Rightbar({ user }: IRightbarProps): JSX.Element {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        {user ? <ProfileRightbar user={user} /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
