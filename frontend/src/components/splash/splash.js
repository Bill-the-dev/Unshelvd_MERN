import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

  render() {
    return (
      <div>
        <div className='splash-row-1'>
          <h1>Unshelvd</h1>
        </div>
        <div className='splash-row-2'>
          
          <div>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/login'}>Login</Link>
          </div>
        
        </div>
        <div className='splash-row-3'>
          <footer>
            Copyright &copy; 2022 Unshelvd
          </footer>
        </div>
      </div>
    );
  }
}

export default SplashPage;