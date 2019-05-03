import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT,
} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events
        case RECEIVE_EVENT:
            let newState = merge({}, state, { [action.event.id]: action.event })
            return newState
        case REMOVE_EVENT:
            let someState = merge({}, state)
            delete someState[action.eventId]
            return someState
        default:
            return state
    }
};

export default eventsReducer;