import React from "react"
import { connect } from "react-redux";
import { createGame, removeGameErrors } from "../../actions/game_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";
import CreateGameForm from "./game_create_form";

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUserId: state.session.user.id,
    currentUser: state.entities.users.currentUser,
    errors: state.errors.game
  })
}

const mDTP = dispatch => ({
  createGame: game => dispatch(createGame(game)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  removeErrors: () => dispatch(removeGameErrors())
})

export default connect(mSTP,mDTP)(CreateGameForm);
