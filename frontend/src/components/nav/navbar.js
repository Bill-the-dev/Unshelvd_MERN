import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {

        return (
            <div className='nav-container'>
                <NavLink to={'/'} id='logo'>Unshelvd</NavLink>
                <div className='nav-main-links'>
                    <NavLink to={'/library'}>Library</NavLink>
                    <NavLink to={'/groups'}>Groups</NavLink>
                    <NavLink to={'/suggest'}>Suggest</NavLink>
                    <NavLink to={'/browse'}>Browse</NavLink>
                </div>
                <Link id='logout-button' to={'/'} onClick={this.logoutUser}>Logout</Link>
            </div>
        )
    }
}

export default NavBar;