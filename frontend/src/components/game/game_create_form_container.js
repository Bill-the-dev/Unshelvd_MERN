import React from "react"
import { connect } from "react-redux";
import { createGame } from "../../actions/game_actions";
import CreateGameForm from "./game_create_form";

const mSTP = (state, ownProps) => ({

})

const mDTP = dispatch => ({
  createGame: game => dispatch(createGame(game))
})

export default connect(mSTP,mDTP)(CreateGameForm);
// mstp:     errors: state.errors.session

// mdtp: createGame: data => dispatch(createGame(data))
