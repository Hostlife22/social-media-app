import React from 'react';
import { Online } from '..';
import { Users } from '../../dummyData';
import styles from './Rightbar.module.css';

interface IRightbarProps {
  profile?: boolean;
}

function HomeRightbar(): JSX.Element {
  return (
    <>
      <div className={styles.birthdayContainer}>
        <img className={styles.birthdayImg} src="../assets/gift.png" alt="birthday" />
        <span className={styles.birthdayText}>
          <strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today.
        </span>
      </div>
      <img className={styles.rightbarAd} src="../assets/ad.png" alt="ad" />
      <h4 className={styles.rightbarTitle}>Online Friends</h4>
      <ul className={styles.rightbarFriendList}>
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
}

function ProfileRightbar(): JSX.Element {
  return (
    <>
      <h4 className={styles.rightbarTitle}>User information</h4>
      <div className={styles.rightbarInfo}>
        <div className={styles.rightbarInfoItem}>
          <span className={styles.rightbarInfoKey}>City:</span>
          <span className={styles.rightbarInfoValue}>New York:</span>
        </div>
        <div className={styles.rightbarInfoItem}>
          <span className={styles.rightbarInfoKey}>From:</span>
          <span className={styles.rightbarInfoValue}>Madrid:</span>
        </div>
        <div className={styles.rightbarInfoItem}>
          <span className={styles.rightbarInfoKey}>Relationship:</span>
          <span className={styles.rightbarInfoValue}>Single:</span>
        </div>
      </div>
      <h4 className={styles.rightbarTitle}>User friends</h4>
      <div className={styles.rightbarFollowings}>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src="./assets/person/1.jpeg" alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src="./assets/person/2.jpeg" alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src="./assets/person/3.jpeg" alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src="./assets/person/4.jpeg" alt="avatar" />
          <span className={styles.rightbarFollowingName}>John Carter</span>
        </div>
        <div className={styles.rightbarFollowing}>
          <img className={styles.rightbarFollowingImg} src="./assets/person/5.jpeg" alt="avatar" />
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

function Rightbar({ profile }: IRightbarProps): JSX.Element {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
