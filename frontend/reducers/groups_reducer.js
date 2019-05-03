import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP,
    REMOVE_GROUP,
} from '../actions/group_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups
        case RECEIVE_GROUP:
            let newState = merge({}, state, { [action.group.id]: action.group })
            return newState
        case REMOVE_GROUP:
            let someState = merge({}, state)
            delete someState[action.groupId]
            return someState
        default:
            return state
    }
};

export default eventsReducer;