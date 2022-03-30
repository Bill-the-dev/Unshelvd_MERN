import React from "react";
import { connect } from "react-redux";
import GroupIndex from "./group_index";
import { fetchGroup, fetchGroups } from "../../actions/group_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => ({
  userGroups: Object.values(state.entities.groups.userGroups),
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => (dispatch(fetchGroup(groupId))),
  fetchGroups: () => (dispatch(fetchGroups())),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);