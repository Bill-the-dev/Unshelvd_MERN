import * as GameAPIUtil from '../util/games_util';

export const RECEIVE_GAMES = "RECEIVE_GAMES";
export const RECEIVE_GAME = "RECEIVE_GAME";
export const RECEIVE_LIBRARY = "RECEIVE_LIBRARY";

export const RECEIVE_GAME_ERRORS = "RECEIVE_GAME_ERRORS"
// export const RECEIVE_USER_GAMES = "RECEIVE_USER_GAMES"
// export const RECEIVE_GROUP_GAMES = "RECEIVE_GROUP_GAMES"

export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
})

export const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
})

export const receiveLibrary = games => ({
  type: RECEIVE_LIBRARY,
  games
})

export const receiveGameErrors = errors => {
  // debugger
  return({
    type: RECEIVE_GAME_ERRORS,
    errors: errors.response.data
  })
}

export const fetchGames = () => dispatch => (
  GameAPIUtil.getAllGames()
  .then(games => dispatch(receiveGames(games)))
  .catch(err => console.log(err))
)


export const fetchGame = (gameId) => dispatch => (
  GameAPIUtil.getGame(gameId)
  .then(game => dispatch(receiveGame(game)))
  .catch(err => console.log(err))
)


export const createGame = data => dispatch => (
  GameAPIUtil.createGame(data)
  .then(game => dispatch(receiveGame(game)))
  .catch(err => dispatch(receiveGameErrors(err)))
)


  export const fetchUserLibrary = userId => dispatch => (
    GameAPIUtil.getUserGames(userId)
    .then(games => dispatch(receiveGames(games)))
    .catch(err => console.log(err))
  )
  
  export const fetchGroupLibrary = groupId => dispatch => (
    GameAPIUtil.getGroupGames(groupId)
    .then(games => dispatch(receiveLibrary(games)))
    .catch(err => console.log(err))
  )



