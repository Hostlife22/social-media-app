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
    case AuthActionEnum.FOLLOW: {
      const userFollowings = state.user?.followins || [];
      return {
        ...state,
        user: {
          ...state.user,
          followins: [...userFollowings, action.payload],
        },
      };
    }
    case AuthActionEnum.UNFOLLOW: {
      const userUnfollowings =
        state.user?.followins.filter((following) => following !== action.payload) || [];
      return {
        ...state,
        user: {
          ...state.user,
          followins: userUnfollowings,
        },
      };
    }
    default:
      return state;
  }
}

export default AuthReducer;
