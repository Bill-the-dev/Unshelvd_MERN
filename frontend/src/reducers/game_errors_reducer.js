import { RECEIVE_GAME_ERRORS } from "../actions/game_actions"; 

const gameErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GAME_ERRORS:
      // debugger
      return Object.values(action.errors.err.errors);
    default: 
      return state;
  }
}

export default gameErrorsReducer