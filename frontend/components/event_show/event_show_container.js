import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, attendEvent } from '../../actions/event_actions'
import { fetchGroup } from '../../actions/group_actions'
import { eventAttendees, eventGroup, getHost } from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    users: eventAttendees(state.entities, parseInt(ownProps.match.params.eventId)),
    currentUser: state.entities.users[state.session.id],
    group: eventGroup(state.entities, parseInt(ownProps.match.params.eventId)),
    host: getHost(state.entities, state.entities.events[ownProps.match.params.eventId])
})

const mapDispatchToProps = dispatch => ({
    fetchEvent: eventId  => dispatch(fetchEvent(eventId)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    attendEvent: eventId => dispatch(attendEvent(eventId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventShow)