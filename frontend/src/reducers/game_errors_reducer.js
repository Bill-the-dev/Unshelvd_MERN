import { RECEIVE_GAME_ERRORS, REMOVE_GAME_ERRORS } from "../actions/game_actions"; 

const gameErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GAME_ERRORS:
      return Object.values(action.errors.err.errors);
    case REMOVE_GAME_ERRORS:
      return null
    default: 
      return state;
  }
}

export default gameErrorsReducer