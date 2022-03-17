import React from "react";
import { connect } from "react-redux";
// import { openModal } from "../../actions/modal_actions";
import GroupShow from "./group_show";
import { fetchGroup, fetchGroups } from "../../actions/group_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchGames, fetchUserLibrary } from "../../actions/game_actions";

// Original:
// const mapStateToProps = (state, ownProps) => ({
//   groups: Object.values(state.entities.groups)
// });

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    userGroups: Object.values(state.entities.groups.userGroups),
    currentUser: state.session.user,
    currentGroup: state.entities.groups.currentGroup,
    allUsers: state.entities.users.allUsers,
    allGames: state.entities.games.userGames
    // allGames: Object.values(state.entities.games.userGames)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => (dispatch(fetchGroup(groupId))),
  fetchGroups: () => (dispatch(fetchGroups())),
  fetchUsers: () => (dispatch(fetchUsers())),
  // fetchCurrentUser: () => (dispatch(fetchCurrentUser())),
  fetchGames: () => (dispatch(fetchGames())),
  fetchUserLibrary: (userId) => (dispatch(fetchUserLibrary(userId)))

  // openModal: (modal) => (dispatch(openModal(modal)))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);