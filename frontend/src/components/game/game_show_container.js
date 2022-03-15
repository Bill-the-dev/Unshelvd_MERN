import { connect } from "react-redux";
import { fetchGame, deleteGame } from "../../actions/game_actions";
import GameShow from './game_show';
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps, GameId) => {
    return {
        games: Object.values(state.entities.games),
        gameId: ownProps.gameId,
        // currentGame: Object.values(state.entities.games)[gameId],
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchGame: (id) => (dispatch(fetchGame(id))),
    closeModal: () => dispatch(closeModal()),
    deleteGame: (gameId) => {
        (dispatch(closeModal()));
        (dispatch(deleteGame(gameId)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);