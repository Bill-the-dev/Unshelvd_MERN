import {connect} from 'react-redux';
import {fetchGames, fetchGame, createGame, fetchUserLibrary} from '../../actions/game_actions';
import { fetchUser} from '../../actions/user_actions';
import Library from './library';

const mapStateToProps = state => ({
    sessionUser: state.session.user, 
    userGames: state.users.currentUser.games, 
    //Current user's games will be rendered in the library
    allGames: Object.values(state.entities.games.userGames) //So that clicking on a game in library shows the game information (renders a game show/modal)
})


const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => (dispatch(fetchUser(userId))),
    fetchGames: () => dispatch(fetchGames()),
    fetchGame: gameId => dispatch(fetchGame(gameId)),
    createGame: data => dispatch(createGame(data)),
    fetchUserLibrary: (userId) => dispatch(fetchUserLibrary(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
