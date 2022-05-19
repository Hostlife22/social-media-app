import React from 'react';
import styles from './Rightbar.module.css';

function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayContainer}>
          <img className={styles.birthdayImg} src="../assets/gift.png" alt="birthday" />
          <span className={styles.birthdayText}>
            <strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today.
          </span>
        </div>
        <img className={styles.rightbarAd} src="../assets/ad.png" alt="ad" />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="../assets/person/3.jpeg"
                alt="avatar"
              />
              <span className={styles.rightbarOnline} />
            </div>
            <span className={styles.rightbarUsername}>John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
