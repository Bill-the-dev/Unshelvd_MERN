import React from "react";
import { connect } from "react-redux";
// import { openModal } from "../../actions/modal_actions";
import GroupIndex from "./group_index";

const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups)
});

const mapDispatchToProps = (dispatch) => ({
    // fetchGroups: () => (dispatch(fetchGroups())),
    // openModal: (modal) => (dispatch(openModal(modal)))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);