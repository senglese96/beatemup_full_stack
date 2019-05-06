import { RECIEVE_GROUP } from '../actions/group_actions'

const membershipReducer = (state= {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECIEVE_GROUP:
            return Object.assign({}, state, action.group.membership)
        default:
            return state;
    }
}

export default membershipReducer;