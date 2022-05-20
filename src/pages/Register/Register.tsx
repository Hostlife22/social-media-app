import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>Lamasocial</h3>
          <span className={styles.loginDesc}>
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <input placeholder="Username" className={styles.loginInput} />
            <input placeholder="Email" className={styles.loginInput} />
            <input placeholder="Password" className={styles.loginInput} />
            <input placeholder="Password Again" className={styles.loginInput} />
            <button className={styles.loginButton} type="button">
              Sign Up
            </button>

            <button className={styles.loginRegisterButton} type="button">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
