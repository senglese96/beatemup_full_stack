import { connect } from 'react-redux';
import { updateEvent, fetchEvent } from '../../actions/event_actions'
import EventForm from './event_form'

const mapStateToProps = (state, ownProps) => {
    return {
        formType: 'edit',
        event: state.entities.events[ownProps.match.params.eventId]
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    updateEvent: event => dispatch(updateEvent(event)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventForm)