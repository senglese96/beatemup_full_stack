import { RECEIVE_GROUP } from '../actions/group_actions'

const membershipReducer = (state= {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_GROUP:
            return Object.assign({}, state, action.group.memberships)
        default:
            return state;
    }
}

export default membershipReducer;