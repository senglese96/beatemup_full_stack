import React from 'react'

class GroupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: '',
            name: '',
            description: '',
            category: '',
            formQuestions: [
                <div><label>Where is your group located?<input type="text" value={this.state.location} onChange={handleLocation}/></label></div>,
                <div><label>What is your group interested in</label><input type="text" value={this.state.category} onChange={handleCategory}/></div>,
                <div><label>What will your groups's name be</label><input type="text" value={this.state.name} onChange={handleName} /></div>,
                <div><label>Give your group a brief description</label><input type="text" value={this.state.description} onChange={handleDesc} /></div>
            ]
        }
        this.switchForm = this.switchForm.bind(this)
    }

    switchForm(){
        let temp = this.state.formQuestions.shift();
        this.state.formQuestions.push(temp);
    }

    render(){

    }
}

export default GroupForm;