import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/library'}>Library</Link>
                    <Link to={'/groups'}>Groups</Link>
                    <Link to={'/suggest'}>Suggest</Link>
                    <Link onClick={this.logoutUser} to={'/'}>Logout</Link>
                    {/* <button onClick={this.logoutUser}>Logout</button> */}
                </div>
            );
        }
    }

    render() {
        if (this.props.location.pathname === "/") {
            return null;
        }
        return (
            <div>
                <h1>Unshelvd</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;