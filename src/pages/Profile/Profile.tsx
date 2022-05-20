import { Feed, Rightbar, Sidebar, Topbar } from '../../components';
import styles from './Profile.module.css';

function Profile() {
  return (
    <>
      <Topbar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileTop}>
            <div className={styles.profileCover}>
              <img className={styles.profileCoverImg} src="./assets/post/3.jpeg" alt="bg" />
              <img className={styles.profileUserImg} src="./assets/person/7.jpeg" alt="bg" />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>Sofak Kocaglu</h4>
              <span className={styles.profileInfoDesc}>Hello my friends</span>
            </div>
          </div>
          <div className={styles.profileBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
