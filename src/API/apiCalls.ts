import axios from 'axios';
import React from 'react';
import { Action, AuthActionEnum, PayloadUser } from '../context/AuthInterface';
import { IUserArgs } from './apiCalls.interface';

export const loginCall = async (userCredential: IUserArgs, dispatch: React.Dispatch<Action>) => {
  dispatch({ type: AuthActionEnum.LOGIN_START });
  try {
    const res = await axios.post<PayloadUser>('/api/auth/login', userCredential);

    dispatch({ type: AuthActionEnum.LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    const e = err as any;
    dispatch({ type: AuthActionEnum.LOGIN_SUCCESS, payload: e });
  }
};
