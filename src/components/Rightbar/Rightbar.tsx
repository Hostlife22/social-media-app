import { Add, Remove } from '@mui/icons-material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Online } from '..';
import { AuthContext } from '../../context/AuthContext';
import { Action, AuthActionEnum } from '../../context/AuthInterface';
import { Users } from '../../dummyData';
import { IFriends, IProfileProps, IRightbarProps } from './Rightbar.interface';
import styles from './Rightbar.module.css';

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
  const [friends, setFriends] = useState<IFriends[]>([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState<boolean>(
    Boolean(currentUser?.followins.includes(user?._id)),
  );

  useEffect(() => {
    const isFollowed = Boolean(currentUser?.followins.includes(user?._id));

    setFollowed(isFollowed);
  }, [currentUser, user?._id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get<IFriends[]>(`/api/users/friends/${user?._id}`);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    const userId = { userId: currentUser?._id };
    try {
      if (followed) {
        await axios.put(`/api/users/${user?._id}/unfollow`, userId);

        if (dispatch) {
          dispatch({
            type: AuthActionEnum.UNFOLLOW,
            payload: user?._id,
          } as Action);
        }
      } else {
        await axios.put(`/api/users/${user?._id}/follow`, userId);
      }
    } catch (err) {
      console.log(err);
    }

    setFollowed((prev) => !prev);
  };
  return (
    <>
      {user?.username !== currentUser?.username && (
        <button className={styles.rightbarFollowButton} onClick={handleClick}>
          {followed ? 'Unfollow' : 'Follow'}
          {followed ? <Remove /> : <Add />}
        </button>
      )}
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
        {friends.map((friend) => (
          <Link
            to={`/profile/${friend.username}`}
            style={{ textDecoration: 'none' }}
            key={friend._id}>
            <div className={styles.rightbarFollowing}>
              <img
                className={styles.rightbarFollowingImg}
                src={friend?.profilePicture ? friend.profilePicture : `${PF}person/noAvatar.png`}
                alt="avatar"
              />
              <span className={styles.rightbarFollowingName}>{friend.username}</span>
            </div>
          </Link>
        ))}
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
