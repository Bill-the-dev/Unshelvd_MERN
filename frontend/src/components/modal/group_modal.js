import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import GroupFormContainer from '../group/group_create_container'
import { withRouter } from "react-router-dom";


const GroupModal = ({ modal, closeModal }) => {
    if (!modal) {
        return (null);
    };
    // debugger
    let component;
    switch (modal) {
        case 'addGroup':
          // debugger
            component = <GroupFormContainer />;
            break;
        case 'joinGroup':
            component = <GroupFormContainer />;
            break;
        default:
            return null;
    };
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child_group" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return ({
        modal: state.modal,
    });

};

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupModal));