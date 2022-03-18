import { connect } from "react-redux";
import { fetchGame, fetchGames } from "../../actions/game_actions";
import GameShow from './game_show';
import { fetchUser, updateUser } from "../../actions/user_actions";
// import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    
    return {
        userGames: Object.values(state.entities.games.userGames),
        // TO DISCUSS IN STANDUP
        // gameId: ownProps.gameId,
        // currentGame: Object.values(state.entities.games)[gameId],
        // game: state.entities.games.games.filter(game => game._id === ownProps.match.params.id)[0]
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
    // closeModal: () => dispatch(closeModal()),
    // deleteGame: (gameId) => {
    //     (dispatch(closeModal()));
    //     (dispatch(deleteGame(gameId)));
    
});

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);