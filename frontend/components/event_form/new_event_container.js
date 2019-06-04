import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions'
import EventForm from './event_form'

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event))
})

export default connect(
    null,
    mapDispatchToProps
)(EventForm)