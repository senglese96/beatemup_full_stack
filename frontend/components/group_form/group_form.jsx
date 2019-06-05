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
            photoFile: null,
            currentInput: 0
        }
        this.switchForm = this.switchForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleDesc = this.handleDesc.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
    }

    componentDidUpdate(){
        if (this.props.group && !this.state.hasLoaded) {
            this.setState({
                location: this.props.group.location,
                name: this.props.group.name,
                description: this.props.group.description,
                category: this.props.group.category,
                photoFile: null,
                id: this.props.group.id,
                hasLoaded: true
            })
        }
    }

    componentDidMount(){
        if(this.props.formType === 'edit'){
            this.props.fetchGroup(this.props.match.params.groupId)
        }
    }

    switchForm(e){
        if(e.type !== 'click'){
            if(e.key == 'Enter'){
                this.setState({ currentInput: this.state.currentInput + 1 })
            }
        }else{
            this.setState({currentInput: this.state.currentInput + 1})
        }
    }

    async handleSubmit(e){
        e.preventDefault();
        let newGroup = new FormData();
        newGroup.append("group[location]", this.state.location)
        newGroup.append("group[name]", this.state.name)
        newGroup.append("group[description]", this.state.description)
        newGroup.append("group[category]", this.state.category)
        if(!(this.props.formType === 'edit' && this.state.photoFile === null )){
            newGroup.append("group[photo]", this.state.photoFile)
        }
        newGroup.append("group[id]", this.state.id)
        if(this.props.formType === 'edit'){
            await this.props.updateGroup(newGroup)
            this.props.history.push('/groups/' + this.state.id)
        }else{
            await this.props.createGroup(newGroup)
            this.props.history.push('/')
        }
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
    handlePhoto(e){
        this.setState({photoFile: e.currentTarget.files[0]})
    }
    render(){
        if(this.state.currentInput === 0){
            return(
                <div className='group-form-container'>
                    <div className='group-form-content'>
                        <label>Where is your group located?
                            <br/>
                            <input type="text" value={this.state.location} onChange={this.handleLocation} onKeyPress={this.switchForm}/>
                        </label>
                    </div>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 1) {
            return (
                <div className='group-form-container'>
                    <div className='group-form-content'>
                        <label>What is your group interested in
                            <br/>
                            <input type="text" value={this.state.category} onChange={this.handleCategory} onKeyPress={this.switchForm}/>
                        </label>
                    </div>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 2) {
            return (
                <div className='group-form-container'>
                    <div className='group-form-content'>
                        <label>What will your group's name be
                            <br/>
                            <input type="text" value={this.state.name} onChange={this.handleName} onKeyPress={this.switchForm}/>
                        </label>
                    </div>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 3) {
            return (
                <div className='group-form-container'>
                    <div className='group-form-content'>
                        <label>Give your group a brief description
                            <br/>
                            <textarea value={this.state.description} onChange={this.handleDesc} onKeyPress={this.switchForm}></textarea>
                        </label>
                    </div>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 4) {
            return (
                <div className='group-form-container'>
                    <div className='group-form-content'>
                        <label>Upload a photo for your event
                            <input type="file" onChange={this.handlePhoto} onKeyPress={this.switchForm}/>
                        </label>
                    </div>
                    <div onClick={this.switchForm} className='group-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput >= 5) {
            let submitText = "Finish creating group"
            if(this.state.formType === 'edit'){
                submitText = 'Finish Editing'
            }
            return (
                <div className='group-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group-form-content'>
                            <label>Finish up
                                <br />
                                <input type="submit" value={submitText} />
                            </label>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default GroupForm;