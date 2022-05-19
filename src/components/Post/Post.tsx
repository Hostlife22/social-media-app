import { MoreVert } from '@mui/icons-material';
import React from 'react';
import { IPost, Users } from '../../dummyData';
import styles from './Post.module.css';

interface IPostProps {
  post: IPost;
}

function Post({ post }: IPostProps): JSX.Element {
  const user = Users.filter((u) => u.id === post.userId)[0];

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img className={styles.postProfileImg} src={user && user.profilePicture} alt="avatar" />
            <span className={styles.postUsername}>{user && user.username}</span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImg} src={post.photo} alt="post" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img className={styles.likeIcon} src="../assets/like.png" alt="like icon" />
            <img className={styles.likeIcon} src="../assets/heart.png" alt="heart icon" />
            <span className={styles.postLikeCounter}>{post.like} people like it</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
