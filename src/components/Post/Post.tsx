import { MoreVert } from '@mui/icons-material';
import React from 'react';
import styles from './Post.module.css';

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img className={styles.postProfileImg} src="../assets/person/1.jpeg" alt="avatar" />
            <span className={styles.postUsername}>Safak Kocaoglu</span>
            <span className={styles.postDate}>5 mins ago</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>Hey, its my first post</span>
          <img className={styles.postImg} src="../assets/post/1.jpeg" alt="post" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img className={styles.likeIcon} src="../assets/like.png" alt="like icon" />
            <img className={styles.likeIcon} src="../assets/heart.png" alt="heart icon" />
            <span className={styles.postLikeCounter}>32</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
