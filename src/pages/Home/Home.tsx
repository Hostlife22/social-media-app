import { Feed, Rightbar, Sidebar, Topbar } from '../../components';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Topbar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
