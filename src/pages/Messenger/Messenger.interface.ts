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
