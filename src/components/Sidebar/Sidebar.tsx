import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from '@mui/icons-material';
import React from 'react';
import { Friend } from '..';
import { Users } from '../../dummyData';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <RssFeed className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Feed</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Chat className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Chats</span>
          </li>
          <li className={styles.sidebarListItem}>
            <PlayCircleFilledOutlined className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Videos</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Group className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Groups</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Bookmark className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={styles.sidebarListItem}>
            <HelpOutline className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Questions</span>
          </li>
          <li className={styles.sidebarListItem}>
            <WorkOutline className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Jobs</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Event className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Events</span>
          </li>
          <li className={styles.sidebarListItem}>
            <School className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={styles.sidebarButton} type="button">
          Show More
        </button>
        <hr className={styles.sidebarHr} />
        <ul className={styles.sidebarFriendList}>
          {Users.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
