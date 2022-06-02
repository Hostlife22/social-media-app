import { IConversations, IOnlineUsers } from '../../pages/Messenger/Messenger.interface';

export interface IChatOnlineProps {
  onlineUsers: IOnlineUsers;
  currentId: string | undefined;
  setCurrentChat: React.Dispatch<React.SetStateAction<IConversations | null>>;
}

export interface IChatFriend {
  profilePicture: string;
  username: string;
  _id: string;
}
