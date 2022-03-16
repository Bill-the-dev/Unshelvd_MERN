import React from "react";
import { connect } from "react-redux";
// import { openModal } from "../../actions/modal_actions";
import GroupShow from "./group_show";
import { fetchGroup } from "../../actions/group_actions";

const mapStateToProps = (state) => ({
  groups: Object.values(state.entities.groups)
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => (dispatch(fetchGroup(groupId))),
  // openModal: (modal) => (dispatch(openModal(modal)))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);