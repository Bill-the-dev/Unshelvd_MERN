import {
  RECEIVE_GROUP,
  RECEIVE_GROUPS
} from '../actions/group_actions';

const GroupsReducer = (state = { userGroups: {}, currentGroup: {} }, 
  action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  debugger
  switch (action.type) {
    case RECEIVE_GROUPS:
    action.groups.data.forEach(group => nextState.userGroups[group._id] = group);
    return nextState;

    case RECEIVE_GROUP:
    nextState.currentGroup = action.group.data
    return nextState;
  
    default:
    return state;
  }
};

export default GroupsReducer;