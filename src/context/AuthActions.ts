import { AuthActionEnum, PayloadUser } from './AuthInterface';

export const LoginStart = <T>(userCredentials: T) => ({
  type: AuthActionEnum.LOGIN_START,
});

export const LoginSuccess = (user: PayloadUser) => ({
  type: AuthActionEnum.LOGIN_SUCCESS,
  payload: user,
});

export const LoginFailure = (error: Error) => ({
  type: AuthActionEnum.LOGIN_FAILURE,
  payload: error,
});

export const Follow = (userId: string) => ({
  type: AuthActionEnum.FOLLOW,
  payload: userId,
});

export const UnFollow = (userId: string) => ({
  type: AuthActionEnum.UNFOLLOW,
  payload: userId,
});
