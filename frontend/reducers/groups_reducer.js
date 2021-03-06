import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP,
    REMOVE_GROUP,
} from '../actions/group_actions';

import { RECEIVE_EVENT } from '../actions/event_actions'
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups
        case RECEIVE_GROUP:
            let newState = merge({}, state, { [action.group.group.id]: action.group.group})
            return newState
        case REMOVE_GROUP:
            let someState = merge({}, state)
            delete someState[action.groupId]
            return someState
        case RECEIVE_EVENT:
            return Object.assign({}, state, action.event.groups)
        default:
            return state
    }
};

export default eventsReducer;