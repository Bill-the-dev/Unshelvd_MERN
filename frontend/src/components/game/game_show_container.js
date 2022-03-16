import { connect } from "react-redux";
import { fetchGame, fetchGames } from "../../actions/game_actions";
import GameShow from './game_show';
// import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        games: Object.values(state.entities.games.games),
        // TO DISCUSS IN STANDUP
        // gameId: ownProps.gameId,
        // currentGame: Object.values(state.entities.games)[gameId],
        // game: state.entities.games.games.filter(game => game._id === ownProps.match.params.id)[0]
        game: state.entities.games.game
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchGame: (gameId) => (dispatch(fetchGame(gameId))),
    fetchGames: () => (dispatch(fetchGames())),
    // closeModal: () => dispatch(closeModal()),
    // deleteGame: (gameId) => {
    //     (dispatch(closeModal()));
    //     (dispatch(deleteGame(gameId)));
    
});

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);