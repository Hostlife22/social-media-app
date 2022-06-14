import React from 'react';
import { Link } from 'react-router-dom';
import { ISearchListType, ISearchProps } from './SearchList.interface';
import styles from './SearchList.module.css';

const SearchList = React.forwardRef(({ user }: ISearchProps, ref: ISearchListType) => {
  const PF = process.env.VITE_APP_PUBLICK_FOLDER;
  return (
    <div className={styles.searchList} ref={ref}>
      {user ? (
        <Link to={`/profile/${user.username}`} style={{ textDecoration: 'none', color: 'black' }}>
          <div className={styles.searchListWrapper}>
            <img
              className={styles.searchListImg}
              src={user?.coverPicture ? PF + user.coverPicture : `${PF}person/noAvatar.png`}
              alt="img"
            />
            <span className={styles.searchListName}>{user.username}</span>
          </div>
        </Link>
      ) : (
        <p className={styles.searchListNotFound}>User not found</p>
      )}
    </div>
  );
});

export default SearchList;
