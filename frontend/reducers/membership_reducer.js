import { RECEIVE_GROUP, RECEIVE_MEMBERSHIP } from '../actions/group_actions'

const membershipReducer = (state= {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_GROUP:
            return Object.assign({}, state, action.group.memberships);
        case RECEIVE_MEMBERSHIP:
            return Object.assign({}, state, {[action.membership.id]: action.membership})
        default:
            return state;
    }
}

export default membershipReducer;