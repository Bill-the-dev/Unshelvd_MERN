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
    // this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      }
    
      this.setState({errors: nextProps.errors})
      this.props.history.push('/library');
    }
    
    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      // debugger
      let user = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2
      };
      
      // this.props.signup(user, this.props.history); 
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
        <h2>Sign Up</h2>
        <h4><Link to='/login'>Log In</Link> instead</h4>
          <form onSubmit={this.handleSubmit}>
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
              <br/>
              <input className='signup' type="submit" value="Sign Up" />
              {/* <div className='signup-errors'> */}
                {this.renderErrors()}
              {/* </div> */}
          </form>
          <button className="form-button" onClick={() => loginDemo()}>Demo Log In</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);