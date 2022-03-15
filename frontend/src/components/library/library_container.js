import {connect} from 'react-redux';
import {fetchAllGames, fetchGame, createGame} from '../../actions/game_actions';
import {fetchUserGames} from '../../actions/user_actions';
import Library from './library';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser, //Current user's games will be rendered in the library
    games: state.entities.games, //So that clicking on a game in library shows the game information (renders a game show/modal)
})


const mapDispatchToProps = dispatch => ({
    fetchAllGames: () => dispatch(fetchAllGames()),
    fetchGame: id => dispatch(fetchGame(id)),
    createGame: data => dispatch(createGame(data)),
    fetchUserGames: id => dispatch(fetchUserGames(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
