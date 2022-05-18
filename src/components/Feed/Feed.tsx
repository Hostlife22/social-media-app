import React from 'react';
import { Post, Share } from '..';
import styles from './Feed.module.css';

function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
