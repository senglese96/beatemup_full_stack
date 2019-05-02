import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                
                <span>
                    <i onClick={closeModal} className="fa fa-times" id='modal-x'></i>
                    <h1>Sign Up</h1>
                    <p>Already a member? <Link to='/login' onClick={closeModal}>Log In</Link></p>
                </span>
                <div>
                    <Link to="/signup" onClick={closeModal}><div className="modal-link">
                       <i className="far fa-envelope"></i>   Sign Up With Email</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);