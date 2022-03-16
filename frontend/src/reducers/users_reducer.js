import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';


const UsersReducer = (state = { currentUser: {}, allUsers: {} }, action) => {
  debugger
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_USERS:
      action.users.data.forEach(user => nextState.allUsers[user._id] = user);
      return nextState;

    case RECEIVE_USER:
      nextState.currentUser = action.user.data;

      // let mutualUsers = [];
      // action.user.data.groups.map(group => {
      //   group.users.map(user => {
      //     if (!mutualUsers.includes(user.id)) mutualUsers.concat(user.id);
      //   });
      // });

      // nextState.groupUsers = mutualUsers;
      return nextState;
    default:
      return state;
  }
};

export default UsersReducer;



// To fill groupUsers

// one user's groups => map over groups map over group's users => 
// add those users to groupUsers slice of state
