import { createContext, useReducer } from 'react';
import { IState } from './AuthInterface';
import AuthReducer from './AuthReducer';

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<IState>(initialState);

export function AuthContextProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const { user, isFetching, error } = state;

  return (
    <AuthContext.Provider
      value={{
        user,
        isFetching,
        error,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
