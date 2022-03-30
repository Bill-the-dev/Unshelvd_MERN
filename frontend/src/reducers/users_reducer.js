import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';


const UsersReducer = (state = { currentUser: {}, allUsers: {} }, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_USERS:
      action.users.data.forEach(user => nextState.allUsers[user._id] = user);
      return nextState;

    case RECEIVE_USER:
      nextState.currentUser = action.user.data;
      return nextState;

      case RECEIVE_USER_LOGOUT: 
        return {
          allUsers: {},
          currentUser: {}
        }
    default:
      return state;
  }
};

export default UsersReducer;
