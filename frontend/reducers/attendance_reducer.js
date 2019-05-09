import { RECEIVE_EVENT, RECEIVE_ATTENDANCE} from '../actions/event_actions'

const attendanceReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENT:
            return Object.assign({}, state, action.event.attendances)
        case RECEIVE_ATTENDANCE:
            debugger
            return Object.assign({}, state, {[action.attendance.id]: action.attendance})
        default:
            return state;
    }
}

export default attendanceReducer;