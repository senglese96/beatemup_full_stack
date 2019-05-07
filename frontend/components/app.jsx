import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util'
import NavBarContainer from './nav_bar_container'
import MainPageContainer from './main_page/main_page_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'
import Modal from './modal';
import GroupFormContainer from './group_form/group_form_container'
import GroupShowContainer from './group_show/group_show_container'

const App = () => (
    <> 
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <Route exact path='/' component={MainPageContainer} />
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
        <ProtectedRoute path='/newgroup' component={GroupFormContainer}/>
        <Route path='/groups/:groupId' component={GroupShowContainer}/>
    </>
)

export default App