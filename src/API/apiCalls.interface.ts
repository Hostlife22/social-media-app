import { PayloadUser } from '../context/AuthInterface';

export interface IData {
  data: PayloadUser;
}

export interface IUserArgs {
  email: string | undefined;
  password: string | undefined;
}
