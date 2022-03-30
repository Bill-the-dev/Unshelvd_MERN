import { connect } from "react-redux";
import { fetchGames } from "../../actions/game_actions";
import { openModal } from "../../actions/modal_actions";
import AllGameIndex from "./all_game";


const mSTP = (state, ownProps) => {
  return({
    allGames: Object.values(state.entities.games.userGames),
    currentUser: state.session.user
  })
}

const mDTP = dispatch => ({
  fetchGames: () => dispatch(fetchGames()),
  openModal: modal => dispatch(openModal(modal))
})



export default connect(mSTP, mDTP)(AllGameIndex)