import { connect } from "react-redux";
import CreateGroup from "./group_create_form";
import { createGroup, updateGroup } from "../../actions/group_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state,ownProps) => {
  // debugger
  return({
    currentUserId: state.session.user.id,
    currentUser: state.entities.users.currentUser,
    errors: state.errors.group,
    modal: state.modal,
    allGroups: Object.values(state.entities.groups.userGroups)
  })
}

const mDTP = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  // joinGroup: group => dispatch(joinGroup(group)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  updateGroup: group => dispatch(updateGroup(group)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP,mDTP)(CreateGroup))