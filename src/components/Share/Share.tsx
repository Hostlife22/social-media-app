import { Cancel, EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ISharePost } from './Share.interface';
import styles from './Share.module.css';

function Share() {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_APP_PUBLICK_FOLDER;
  const desc = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost: ISharePost = {
      userId: user?._id,
      desc: desc.current?.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      try {
        await axios.post('/api/upload', data);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post('/api/posts', newPost);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            className={styles.shareProfileImg}
            src={user?.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
            alt="profile"
          />
          <input
            placeholder={`What's in your mind ${user?.username}?`}
            type="text"
            className={styles.shareInput}
            ref={desc}
          />
        </div>
        <hr className={styles.shareHr} />
        {file && (
          <div className={styles.shareImgContainer}>
            <img src={URL.createObjectURL(file)} className={styles.shareImg} alt="file" />
            <Cancel className={styles.shareCancelImg} onClick={() => setFile(null)} />
          </div>
        )}
        <form className={styles.shareBottom} onSubmit={submitHandler}>
          <div className={styles.shareOptions}>
            <label htmlFor="file" className={styles.shareOption}>
              <PermMedia htmlColor="tomato" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => e.target.files?.length && setFile(e.target.files[0])}
              />
            </label>
            <div className={styles.shareOption}>
              <Label htmlColor="blue" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <Room htmlColor="green" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotions htmlColor="goldenrod" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton} type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
