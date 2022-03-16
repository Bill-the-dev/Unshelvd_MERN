import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class Splash extends React.Component {

  render() {
    const {openModal} = this.props
    return (
      <div className='splash-container' >
        <div className='splash-row-1'>
          <p onClick={() => openModal('About')}>About</p>
          <h1>Unshelvd</h1>
          <p>The Team</p>
        </div>
        <div className='splash-row-2'>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>
        </div>
        <div className='splash-row-3'>
            <p>"I dunno, what do you want to do?"</p>
            <p>Unshelvd is here to solve your friend group's indecision</p>
        </div>
        <div className='splash-row-4'>
          <footer>
            Copyright &copy; 2022 Unshelvd
          </footer>
        </div>
      </div>
    );
  }
}

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mDTP)(Splash)
// export default SplashPage;