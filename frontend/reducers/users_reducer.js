import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_GROUP } from '../actions/group_actions'
import { RECEIVE_EVENT } from '../actions/event_actions'
import merge from 'lodash'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_GROUP:
            return Object.assign({}, state, action.group.users)
        case RECEIVE_EVENT:
            return Object.assign({}, state, action.event.users)
        default:
            return state
    }
}

export default usersReducer;