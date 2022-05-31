import React from 'react';
import { IUser } from '../Post/Post.interface';

export type ISearchListType = React.LegacyRef<HTMLDivElement> | undefined;

export interface ISearchProps {
  user: IUser | null;
}
