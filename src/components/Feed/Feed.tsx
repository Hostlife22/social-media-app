import React from 'react';
import { Post, Share } from '..';
import { Posts } from '../../dummyData';
import styles from './Feed.module.css';

function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
