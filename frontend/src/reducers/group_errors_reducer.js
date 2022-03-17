import { RECEIVE_GROUP_ERRORS } from "../actions/group_actions"; 

const groupErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GROUP_ERRORS:
      return Object.values(action.errors);
    default: 
      return state;
  }
}

export default groupErrorsReducer