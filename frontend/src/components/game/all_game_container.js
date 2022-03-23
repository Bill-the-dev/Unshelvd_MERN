import { connect } from "react-redux";
import { fetchGames } from "../../actions/game_actions";
import AllGameIndex from "./all_game";


const mSTP = (state, ownProps) => {
  // debugger
  return({
    allGames: Object.values(state.entities.games.userGames),
    currentUser: state.session.user
  })
}

const mDTP = dispatch => ({
  fetchGames: () => dispatch(fetchGames())
})



export default connect(mSTP, mDTP)(AllGameIndex)