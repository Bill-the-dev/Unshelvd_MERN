import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';
import GameShowContainer from './game/game_show_container';
// import LibraryContainer from './library/library_container'

const App = () => (
    <div>
        <Modal />
        <ProtectedRoute path='/' component={NavBarContainer}/>
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/library/games/:id" component={GameShowContainer} />
            {/* <ProtectedRoute exact path="/library" component={LibraryContainer} /> */}
        </Switch>
    </div>
);

export default App;