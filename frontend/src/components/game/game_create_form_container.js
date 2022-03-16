import React from "react"
import { connect } from "react-redux";
import { createGame } from "../../actions/game_actions";
import CreateGameForm from "./game_create_form";

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.session.user
  })
}

const mDTP = dispatch => ({
  createGame: game => dispatch(createGame(game))
})

export default connect(mSTP,mDTP)(CreateGameForm);
