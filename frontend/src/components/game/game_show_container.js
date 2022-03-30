import { connect } from "react-redux";
import { fetchGame, fetchGames } from "../../actions/game_actions";
import GameShow from './game_show';
import { fetchUser, updateUser } from "../../actions/user_actions";


const mapStateToProps = (state, ownProps) => {
    
    return {
        userGames: Object.values(state.entities.games.userGames),
     
        currentUser: state.entities.users.currentUser,
        currentUserId: state.session.user.id,
        currentGame: state.entities.games.currentGame,
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchGame: (gameId) => (dispatch(fetchGame(gameId))),
    fetchGames: () => (dispatch(fetchGames())),
    fetchUser: user => dispatch(fetchUser(user)),
    updateUser: user => dispatch(updateUser(user))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);