import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    updateUsername(e) {
        this.setState({ username: e.currentTarget.value })
    }

    updatePassword(e) {
        this.setState({ password: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        let formText = ''
        let otherText = ''
        let otherType = ''

        if (this.props.formType === 'login') {
            formText = 'Log In'
            otherText = 'Sign Up'
            otherType = 'signup'
        }
        else {
            formText = 'Sign Up'
            otherText = 'Log In'
            otherType = 'login'
        }
        // TODO refactor into two components. the forms are too different.
        let errors
        if(this.props.errors.length !== 0){
            errors = <ul className='session-errors'>
                {this.props.errors.map(error => {
                    return <li>{error}</li>
                })}
            </ul>;
        } else{
            errors = null
        }

        return (
            <>
            {errors}
            <div className='form-container'>
                <h3>{formText}</h3>
                <Link to={'/' + otherType}>{otherText}</Link>
                <form className='session-form' onSubmit={this.handleSubmit}>
                    <label>Username:
                    <br/>
                        <input type="text" value={this.state.username} onChange={this.updateUsername} />
                    </label>
                    <label>Password:
                    <br/>
                        <input type="password" value={this.state.password} onChange={this.updatePassword} />
                    </label>
                    <input type="submit" value={formText} />
                </form>
            </div>
            </>
        )
    }
}

export default SessionForm;