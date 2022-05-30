import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

function Register() {
  const username = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const passwordAgain = useRef<HTMLInputElement | null>(null);
  const navigation = useNavigate();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.current?.value !== passwordAgain.current?.value) {
      passwordAgain.current?.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      };

      try {
        await axios.post('/api/auth/register', user);
        navigation('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <form className={styles.loginBox} onSubmit={handleClick}>
            <input placeholder="Username" className={styles.loginInput} ref={username} required />
            <input
              placeholder="Email"
              type="email"
              className={styles.loginInput}
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className={styles.loginInput}
              ref={password}
              minLength={6}
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className={styles.loginInput}
              minLength={6}
              ref={passwordAgain}
              required
            />
            <button className={styles.loginButton} type="submit">
              Sign Up
            </button>

            <button
              className={styles.loginRegisterButton}
              type="button"
              onClick={() => navigation('/login')}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
