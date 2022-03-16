import React from "react"
import { connect } from "react-redux";
import { createGame } from "../../actions/game_actions";
import { fetchUser } from "../../actions/user_actions";
import CreateGameForm from "./game_create_form";

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUserId: state.session.user.id,
    currentUser: state.entities.users.currentUser
  })
}

const mDTP = dispatch => ({
  createGame: game => dispatch(createGame(game)),
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP,mDTP)(CreateGameForm);
