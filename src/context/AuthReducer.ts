import { Action, AuthActionEnum, IState } from './AuthInterface';

function AuthReducer(state: IState, action: Action) {
  switch (action.type) {
    case AuthActionEnum.LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case AuthActionEnum.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case AuthActionEnum.LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
}

export default AuthReducer;
