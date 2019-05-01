import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (modalDefault = false, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return modalDefault;
    }
}

export default modalReducer;