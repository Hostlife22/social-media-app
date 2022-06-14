import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { AuthContext } from '../../context/AuthContext';
import { IPostData } from '../Feed/Feed.interface';
import { IUser } from './Post.interface';
import styles from './Post.module.css';

interface IPostProps {
  post: IPostData;
}

function Post({ post }: IPostProps): JSX.Element {
  const [like, setLike] = React.useState<number>(post.likes.length);
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<IUser | null>(null);
  const PF = process.env.VITE_APP_PUBLICK_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      setIsLiked(post.likes.includes(currentUser._id));
    }
  }, [currentUser?._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?userId=${post.userId}`);

      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put(`/api/posts/${post._id}/like`, { userId: currentUser?._id });
    } catch (err) {
      console.log(err);
    }
    setLike((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <Link to={`profile/${user?.username}`}>
              <img
                className={styles.postProfileImg}
                src={user?.profilePicture ? PF + user.profilePicture : `${PF}/person/noAvatar.png`}
                alt="avatar"
              />
            </Link>
            <span className={styles.postUsername}>{user && user.username}</span>
            <span className={styles.postDate}>{format(post.createdAt)}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImg} src={post?.img && PF + post.img} alt="post" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              className={styles.likeIcon}
              src="../assets/like.png"
              alt="like icon"
              onClick={likeHandler}
            />
            <img
              className={styles.likeIcon}
              src="../assets/heart.png"
              alt="heart icon"
              onClick={likeHandler}
            />
            <span className={styles.postLikeCounter}>{like} people like it</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>{0} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
