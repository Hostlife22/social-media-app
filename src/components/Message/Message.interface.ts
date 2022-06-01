import { IMessage } from '../../pages/Messenger/Messenger.interface';

export interface IMessageProps {
  own?: boolean;
  message: IMessage;
}
