import {
  RECEIVE_GAMES,
  RECEIVE_GAME,
} from '../actions/game_actions';

const GamesReducer = (state = { userGames: {}, currentGame: {}}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GAMES:
      // debugger
      // nextState.games = action.games.data
      action.games.data.forEach(game => nextState.userGames[game._id] = game);
      return nextState;
    case RECEIVE_GAME:
      nextState.currentGame = action.game.data;
      return nextState;
    default:
      return state;
  }
};

export default GamesReducer;