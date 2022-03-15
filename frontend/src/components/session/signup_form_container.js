import { connect } from 'react-redux';
import { signup, loginDemo } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    loginDemo: () => dispatch(loginDemo())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);