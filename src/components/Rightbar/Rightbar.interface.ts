import { IUser } from '../Post/Post.interface';

export interface IRightbarProps {
  user?: IUser | null;
}

export interface IProfileProps {
  user: IUser;
}

export interface IFriends {
  _id: string;
  username: string;
  profilePicture: string;
}
