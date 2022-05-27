export interface IPostData {
  _id: string;
  userId: string;
  desc: string;
  img?: string;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
}
