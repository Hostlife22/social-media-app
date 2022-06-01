import { PayloadUser } from '../../context/AuthInterface';
import { IConversations } from '../../pages/Messenger/Messenger.interface';

export interface IConversationProps {
  conversation: IConversations;
  currentUser: PayloadUser | null;
}
