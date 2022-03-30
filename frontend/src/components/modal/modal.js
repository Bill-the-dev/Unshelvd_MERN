import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import AboutShow from "../splash/about";
import TeamShow from "../splash/team";
import GameModal from "../game/game_modal";
import { withRouter } from "react-router-dom";
import GroupFormContainer from '../group/group_create_container';
import {fetchUser, updateUser} from '../../actions/user_actions';



const Modal = ({ modal, closeModal, fetchUser, updateUser, currentUser, currentUserId }) => {
    if (!modal) {
        return (null);
    };
    let component;
    switch (modal) {
        case 'About':
            component = <AboutShow />;
            break;
        case 'Team':
            component = <TeamShow />;
            break
        case 'addGroup':
            component = <GroupFormContainer />; 
            return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-child_group" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );
        case 'joinGroup':
            component = <GroupFormContainer />;
            return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-child_group" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );
        case modal:
             component = <GameModal modal={modal} currentUser={currentUser} currentUserId={currentUserId} updateUser={updateUser} fetchUser={fetchUser} />;
             return (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-child_game" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );
      
        default:
            return null;
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return ({
        modal: state.modal,
        currentUser: state.entities.users.currentUser,
    });

};

const mapDispatchToProps = (dispatch) => {
    return({
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: userId =>  dispatch(fetchUser(userId))
})
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));