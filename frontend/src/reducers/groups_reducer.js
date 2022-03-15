import {
  RECEIVE_GROUP
} from '../actions/group_actions';

const GroupsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GROUP:
      nextState = action.group.data
      return nextState;
    default:
      return state;
  }
};

export default GroupsReducer;