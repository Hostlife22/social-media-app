export interface IPostData {
  _id: string;
  userId: string;
  desc: string;
  img?: string;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IFeedProps {
  username?: string;
}
