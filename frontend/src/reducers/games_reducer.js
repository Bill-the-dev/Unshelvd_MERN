import {
  RECEIVE_GAMES,
  RECEIVE_GAME,
  RECEIVE_LIBRARY
} from '../actions/game_actions';

const GamesReducer = (state = { userLibrary: {}, userGames: {}, currentGame: {}}, action) => {
  Object.freeze(state);
  // debugger
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GAMES:
      // nextState.games = action.games.data
      action.games.data.forEach(game => nextState.userGames[game._id] = game);
      return nextState;
    case RECEIVE_LIBRARY:
      // debugger
      // nextState.games = action.games.data
      action.games.data.forEach(game => {
        // HERE
        // debugger
        nextState.userLibrary[game] = game
      });
      return nextState;
    case RECEIVE_GAME:
      nextState.currentGame = action.game.data;
      return nextState;
    default:
      return state;
  }
};

export default GamesReducer;