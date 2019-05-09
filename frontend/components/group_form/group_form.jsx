import React from 'react'
import { Redirect } from 'react-router-dom'

class GroupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: '',
            name: '',
            description: '',
            category: '',
            currentInput: 0
        }
        this.switchForm = this.switchForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleDesc = this.handleDesc.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleName = this.handleName.bind(this)
    }

    switchForm(){
        this.setState({currentInput: this.state.currentInput + 1})
    }

    handleSubmit(e){
        e.preventDefault();
        let newGroup = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            category: this.state.category
        };
        this.props.createGroup(newGroup);
        this.props.history.push('/')
    }

    handleCategory(e){
        this.setState({ category: e.currentTarget.value });
    }

    handleName(e) {
        this.setState({ name: e.currentTarget.value });
    }

    handleDesc(e) {
        this.setState({ description: e.currentTarget.value });
    }

    handleLocation(e) {
        this.setState({location: e.currentTarget.value});
    }

    render(){
        if(this.state.currentInput === 0){
            return(
                <div className='group-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group-form-content'>
                            <label>Where is your group located?
                                <br/>
                                <input type="text" value={this.state.location} onChange={this.handleLocation} />
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 1) {
            return (
                <div className='group-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group-form-content'>
                            <label>What is your group interested in
                                <br/>
                                <input type="text" value={this.state.category} onChange={this.handleCategory}/>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 2) {
            return (
                <div className='group-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group-form-content'>
                            <label>What will your group's name be
                                <br/>
                                <input type="text" value={this.state.name} onChange={this.handleName} />
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 3) {
            return (
                <div className='group-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group-form-content'>
                            <label>Give your group a brief description
                                <br/>
                                <textarea value={this.state.description} onChange={this.handleDesc} ></textarea>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 4) {
            return (
                <div className='group-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group-form-content'>
                            <label>Finish off creating your group
                                <br />
                                <input type="submit" value="Create Group" />
                            </label>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default GroupForm;