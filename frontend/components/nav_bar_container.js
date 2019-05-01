import NavBar from './nav_bar'
import {connect} from 'react-redux'
import { signup, logout } from '../actions/session_actions'
import { openModal } from '../actions/modal_actions'

const mapStateToProps = state => ({
    loggedIn: !!(state.session.id)
})

const mapDispatchToProps = dispatch => ({
    signup:  user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)