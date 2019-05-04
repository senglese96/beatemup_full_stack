import MainPage from  './main_page'
import { connect } from 'react-redux'
import { fetchGroups } from '../../actions/group_actions'
import { fetchEvents } from '../../actions/event_actions'
import { groupSelector } from '../../reducers/selectors'

const mapStateToProps = state => ({
    loggedIn: !!(state.session.id),
    groups: groupSelector(state.entities.groups),
    events: groupSelector(state.entities.events)
})

const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups()),
    fetchEvents: () => dispatch(fetchEvents())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)