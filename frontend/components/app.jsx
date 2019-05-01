import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util'
import NavBarContainer from './nav_bar_container'
import MainPageContainer from './main_page/main_page_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
    <> 
        <header>
            <NavBarContainer />
        </header>
        <Route exact path='/' component={MainPageContainer} />
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
    </>
)

export default App