import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import LibraryContainer from './library/library_container';
import GroupIndexContainer from './group/group_index_container';
const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={SplashPage} />
            {/* <ProtectedRoute exact path="/library" component={LibraryContainer} /> */}
            <Route path="/groups/:id" component={GroupIndexContainer}/>
        </Switch>
    </div>
);

export default App;