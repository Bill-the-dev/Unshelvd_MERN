import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/library');
      }
    
      this.setState({errors: nextProps.errors})
    }
    
    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      let user = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2
      };
      
      this.props.signup(user)
  }

  renderErrors() {
    return(
      <ul className='signup-errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const {loginDemo} = this.props
    return (
      <div className="signup-form-container">
        <div className="signup-form">
        <h1><Link to='/'>Unshelvd</Link></h1>
        <h2>Sign Up</h2>
        <h4><Link to='/login'>Log In</Link> instead</h4>
          <form onSubmit={this.handleSubmit}>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className='form-input'
                />
  
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  className='form-input'
                />
  
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className='form-input'
                />
  
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                  className='form-input'
                />
              <br/>
            <input className='button' id='button--session' type="submit" value="Sign Up" />
            <div className='button' id='button--demo' onClick={() => loginDemo()}>Demo Log In</div>
              {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);