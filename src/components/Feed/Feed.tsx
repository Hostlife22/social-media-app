import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Post, Share } from '..';
import { AuthContext } from '../../context/AuthContext';
import sortDate from '../../helpers';
import { IFeedProps, IPostData } from './Feed.interface';
import styles from './Feed.module.css';

function Feed({ username }: IFeedProps): JSX.Element {
  const [post, setPosts] = useState<IPostData[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get<IPostData[]>(`/api/posts/profile/${username}`)
        : await axios.get<IPostData[]>(`/api/posts/timeline/${user?._id}`);
      setPosts(res.data.sort((p1, p2) => sortDate(new Date(p2.createdAt), new Date(p1.createdAt))));
    };

    fetchPosts();
  }, [username, user?._id]);

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        {(!username || username === user?.username) && <Share />}
        {post.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
