import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Topbar.module.css';

function Topbar(): JSX.Element {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className={styles.logo}>Lamasocial</span>
        </Link>
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
        <Link to={`/profile/${user?.username}`}>
          <img
            src={user?.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
            alt="logo"
            className={styles.topbarImg}
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
