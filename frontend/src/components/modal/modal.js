import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'
// import GameShowContainer from "../game/game_show_container";
import AboutShow from "../splash/about";
import TeamShow from "../splash/team";
import GameModal from "../game/game_modal";
import { withRouter } from "react-router-dom";
import GroupFormContainer from '../group/group_create_container';



const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return (null);
    };
    let component;
    switch (modal) {
        case 'Signup':
            component = <SignupFormContainer />;
            break;
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
             component = <GameModal modal={modal} />;
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
    });

};

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));