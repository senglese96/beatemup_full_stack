import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util'
import NavBarContainer from './nav_bar_container'
import MainPageContainer from './main_page/main_page_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'
import Modal from './modal';
import NewGroupContainer from './group_form/new_group_container'
import EditGroupContainer from './group_form/edit_group_container'
import GroupShowContainer from './group_show/group_show_container'
import EventShowContainer from './event_show/event_show_container'
import NewEventContainer from './event_form/new_event_container'
import EditEventContainer from './event_form/edit_event_container'

const App = () => (
    <> 
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        <Route exact path='/' component={MainPageContainer} />
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
        <ProtectedRoute path='/newgroup' component={NewGroupContainer}/>
        <ProtectedRoute path='/newevent' component={NewEventContainer}/>
        <ProtectedRoute path='/editgroup/:groupId' component={EditGroupContainer}/>
        <ProtectedRoute path='/editevent/:eventId' component={EditEventContainer}/>
        <Route path='/groups/:groupId' component={GroupShowContainer}/>
        <Route path='/events/:eventId' component={EventShowContainer}/>
    </>
)

export default App