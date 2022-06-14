import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Feed, Rightbar, Sidebar, Topbar } from '../../components';
import { IUser } from '../../components/Post/Post.interface';
import styles from './Profile.module.css';

function Profile() {
  const [user, setUser] = useState<IUser | null>(null);
  const { username } = useParams<{ username?: string }>();
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${username}`);

      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src={user?.coverPicture ? PF + user.coverPicture : `${PF}post/3.jpeg`}
                alt="bg"
              />
              <img
                className={styles.profileUserImg}
                src={user?.coverPicture ? PF + user.coverPicture : `${PF}person/noAvatar.png`}
                alt="bg"
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>{user?.username}</h4>
              <span className={styles.profileInfoDesc}>{user?.desc}</span>
            </div>
          </div>
          <div className={styles.profileBottom}>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
