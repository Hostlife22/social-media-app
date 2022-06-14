import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchList } from '..';
import { AuthContext } from '../../context/AuthContext';
import { IUser } from '../Post/Post.interface';
import styles from './Topbar.module.css';

function Topbar(): JSX.Element {
  const { user } = useContext(AuthContext);
  const PF = process.env.VITE_APP_PUBLICK_FOLDER;
  const [modal, setModal] = useState<boolean>(false);
  const [findedUser, setFindedUser] = useState<IUser | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const modalHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isModal = target.closest(`div.${ref.current?.className}`);

      !isModal && setModal(false);
    };

    document.addEventListener('click', modalHandler);

    return () => {
      document.removeEventListener('click', modalHandler);
    };
  }, []);

  const getUser = async (username: string) => {
    try {
      const data = await axios.get<IUser>(`/api/users?username=${username}`);
      console.log(data);

      setFindedUser(data.data);
    } catch {
      setFindedUser(null);
    }
    setModal(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = searchRef.current?.value;
    if (username) {
      getUser(username);
    }
  };

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className={styles.logo}>Hostlive</span>
        </Link>
      </div>
      <div className={styles.topbarCenter}>
        <form className={styles.searchbar} onSubmit={handleSubmit}>
          <Search className={styles.searchIcon} />
          <input placeholder="Search for friend" className={styles.searchInput} ref={searchRef} />
        </form>
        {modal && <SearchList ref={ref} user={findedUser} />}
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <Link className={styles.topbarLinksItem} to={`/profile/${user?.username}`}>
            <span className={styles.topbarLink}>Homepage</span>
          </Link>
          <Link to="/" className={styles.topbarLinksItem}>
            <span className={styles.topbarLink}>Timeline</span>
          </Link>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <Person />
            <span className={styles.topbarIconBage}>1</span>
          </div>
          <Link to="/messenger" className={styles.topbarLinksItem}>
            <div className={styles.topbarIconItem}>
              <Chat />
              <span className={styles.topbarIconBage}>2</span>
            </div>
          </Link>
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
