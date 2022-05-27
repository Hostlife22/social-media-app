import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Post, Share } from '..';
import { IPostData } from './Feed.interface';
import styles from './Feed.module.css';

interface IFeedProps {
  username?: string;
}

function Feed({ username }: IFeedProps): JSX.Element {
  const [post, setPosts] = useState<IPostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get('/api/posts/timeline/6277ceb4d1d1ee1779d2861a');
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {post.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
