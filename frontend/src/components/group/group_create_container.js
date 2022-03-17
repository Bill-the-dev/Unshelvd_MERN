import { connect } from "react-redux";
import CreateGroup from "./group_create_form";
import { createGroup } from "../../actions/group_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state,ownProps) => {
  return({
    currentUserId: state.session.user.id,
    currentUser: state.entities.users.currentUser,
    errors: state.errors.group
  })
}

const mDTP = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP,mDTP)(CreateGroup))