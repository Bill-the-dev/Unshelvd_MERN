import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/library');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul className='login-errors'>
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
      <div className='login-form-container'>
        <div className='login-form'>
          <h1><Link to='./'>Unshelvd</Link></h1>
          <h2>Log In</h2>
          <h4><Link to='/signup'>Sign Up</Link> instead</h4>
          <form onSubmit={this.handleSubmit}>
            {/* <div> */}
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  className='form-input'
                />
              {/* <br/> */}
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className='form-input'
                />
              <br/>
              <input className='button button--session' type="submit" value="Log In" />
              <button className="button button--session" onClick={() => loginDemo()}>Demo Log In</button>
              {this.renderErrors()}
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);