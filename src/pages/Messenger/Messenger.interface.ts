export interface IConversations {
  createdAt: Date;
  members: string[];
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface IMessage {
  conversationId: string;
  sender: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IArrivalMessage {
  sender: string;
  text: string;
  createdAt: number;
}

export interface ISocketUsers {
  userId: string;
  socketId: string;
}

export type IOnlineUsers = string[] | undefined;
