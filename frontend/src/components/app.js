import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';
import GameShowContainer from './game/game_show_container';
import GroupShowContainer from './group/group_show_container';
import GroupIndexContainer from './group/group_index_container';
// import LibraryContainer from './library/library_container'
import GameFormContainer from './game/game_create_form_container'
import SuggestContainer from './suggest/suggest_container';
import GroupFormContainer from './group/group_create_container'

const App = () => (
    <div className='app-container'>
        <Modal />
        <ProtectedRoute path='/' component={NavBarContainer}/>
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/groups/:id" component={GroupShowContainer}/>
            <ProtectedRoute exact path="/library/games/:id" component={GameShowContainer} />
            <ProtectedRoute exact path="/groups" component={GroupIndexContainer} />
            {/* <ProtectedRoute exact path="/library" component={LibraryContainer} /> */} 
            <ProtectedRoute exact path='/newgame' component={GameFormContainer} />
            <ProtectedRoute exact path='/newgroup' component={GroupFormContainer} />

            {/* <ProtectedRoute exact path="library" component={LibraryContainer} /> */}
            <ProtectedRoute exact path="/suggest" component={SuggestContainer} />
            {/* <ProtectedRoute exact path="/library" component={LibraryContainer} /> */}
        </Switch>
    </div>
);

export default App;