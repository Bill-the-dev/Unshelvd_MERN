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
import SuggestContainer from './suggest/suggest_container';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute exact path="/library/games/:id" component={GameShowContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={SplashPage} />
            {/* <ProtectedRoute exact path="library" component={LibraryContainer} /> */}
            <ProtectedRoute exact path="/suggest" component={SuggestContainer} />
            <ProtectedRoute path='/' component={NavBarContainer}/>
            {/* <ProtectedRoute exact path="/library" component={LibraryContainer} /> */}
        </Switch>
    </div>
);

export default App;