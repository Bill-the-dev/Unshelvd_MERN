import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'
// import GameShowContainer from "../game/game_show_container";
import AboutShow from "../splash/about";


const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return (null);
    };
    let component;
    switch (modal) {
        case 'Login':
            component = <LoginFormContainer />;
            break;
        case 'Signup':
            component = <SignupFormContainer />;
            break;
        case 'About':
            component = <AboutShow />;
            break;
        // case modal:
        //     component = <GameShowContainer gameId={modal} />; //e.g. modal==1
        //     return (
        //         <div className="modal-background" onClick={closeModal}>
        //             <div className="modal-content-game" onClick={e => e.stopPropagation()}>
        //                 {component}
        //             </div>
        //         </div>
        //     );
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);