import {connect} from 'react-redux';
import {fetchGames, fetchGame, createGame, fetchUserLibrary} from '../../actions/game_actions';
import { fetchUser} from '../../actions/user_actions';
import Library from './library';

const mapStateToProps = state => ({
    sessionUser: state.session.user, 
    currentUser: state.entities.users.currentUser, 
    userGames: state.entities.users.currentUser.games,
    allGames: Object.values(state.entities.games.userGames) 
})


const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => (dispatch(fetchUser(userId))),
    fetchGames: () => dispatch(fetchGames()),
    fetchGame: gameId => dispatch(fetchGame(gameId)),
    createGame: data => dispatch(createGame(data)),
    fetchUserLibrary: (userId) => dispatch(fetchUserLibrary(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
