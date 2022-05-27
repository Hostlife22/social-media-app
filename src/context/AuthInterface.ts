import React from 'react';

export enum AuthActionEnum {
  LOGIN_START = 'LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

export interface PayloadUser {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  coverPicture: string;
  followers: number[];
  followins: number[];
  isAdmin: boolean;
  desc: string;
  city: string;
  from: string;
  relationship: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Action =
  | { type: AuthActionEnum.LOGIN_START }
  | { type: AuthActionEnum.LOGIN_SUCCESS; payload: PayloadUser }
  | { type: AuthActionEnum.LOGIN_FAILURE; payload: Error };

export interface AuthAction {
  type: AuthActionEnum;
  payload: Action;
}

export interface IState {
  user: PayloadUser | null;
  isFetching: boolean;
  error: boolean;
  dispatch?: React.Dispatch<Action>;
}
