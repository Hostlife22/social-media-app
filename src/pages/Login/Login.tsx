import { CircularProgress } from '@mui/material';
import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCall } from '../../API/apiCalls';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.module.css';

function Login() {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dispatch) {
      loginCall({ email: email.current?.value, password: password.current?.value }, dispatch);
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
            <input
              placeholder="Email"
              className={styles.loginInput}
              type="email"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              className={styles.loginInput}
              type="password"
              minLength={6}
              required
              ref={password}
            />
            <button className={styles.loginButton} type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="warning" size="20px" /> : 'Log In'}
            </button>
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button
              className={styles.loginRegisterButton}
              type="button"
              onClick={() => navigation('/register')}
              disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="warning" size="20px" />
              ) : (
                'Create a New Account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
