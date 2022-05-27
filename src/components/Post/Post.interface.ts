export interface IUser {
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
