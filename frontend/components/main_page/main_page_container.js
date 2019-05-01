import MainPage from  './main_page'
import { connect } from 'react-redux'
import { signup, logout, login } from '../../actions/session_actions'

const mapStateToProps = state => ({
    loggedIn: !!(state.session.id)
})

export default connect(
    mapStateToProps,
    null
)(MainPage)