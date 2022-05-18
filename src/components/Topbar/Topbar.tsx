import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import React from 'react';
import styles from './Topbar.module.css';

function Topbar(): JSX.Element {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>Lamasocial</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon} />
          <input placeholder="Search for friend, post or video" className={styles.searchInput} />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>Homepage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <Person />
            <span className={styles.topbarIconBage}>1</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Chat />
            <span className={styles.topbarIconBage}>2</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Notifications />
            <span className={styles.topbarIconBage}>1</span>
          </div>
        </div>
        <img src="../assets/person/1.jpeg" alt="logo" className={styles.topbarImg} />
      </div>
    </div>
  );
}

export default Topbar;
