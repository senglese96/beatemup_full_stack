import React from 'react';

class EventForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category: '',
            date: '',
            title: '',
            eventAddress: '',
            details: '',
            currentInput: 0
        }

        this.switchForm = this.switchForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleDetails = this.handleDetails.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
    }

    componentDidUpdate() {
        if (this.props.event && !this.state.hasLoaded) {
            this.setState({
                category: this.props.event.category,
                date: this.props.event.date,
                title: this.props.event.title,
                eventAddress: this.props.event.eventAddress,
                details: this.props.event.details,
                groupId: this.props.event.groupId,
                id: this.props.event.id,
                hasLoaded: true
            })
        }
    }

    componentDidMount() {
        if (this.props.formType === 'edit') {
            this.props.fetchEvent(this.props.match.params.eventId)
        }
    }

    switchForm(e) {
        if (e.type !== 'click') {
            if (e.key == 'Enter') {
                this.setState({ currentInput: this.state.currentInput + 1 })
            }
        } else {
            this.setState({ currentInput: this.state.currentInput + 1 })
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        let groupId
        if(this.props.formType === 'edit'){
            groupId = this.state.groupId
        }else{
            groupId = this.props.location.state[groupId]
        }
        let newEvent = {
            category: this.state.category,
            title: this.state.title,
            details: this.state.details,
            date: this.state.date,
            eventAddress: this.state.eventAddress,
            id: this.state.id,
            groupId: groupId
        };
        if(this.props.formType === 'edit'){
            await this.props.updateEvent(newEvent)
            this.props.history.push('/events/' + this.state.id)
        } else {
            await this.props.createEvent(newEvent);
            this.props.history.push('/')
        }
    }

    handleCategory(e) {
        this.setState({ category: e.currentTarget.value });
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleDetails(e) {
        this.setState({ details: e.currentTarget.value });
    }

    handleDate(e) {
        this.setState({ date: e.currentTarget.value });
    }

    handleAddress(e) {
        this.setState({ eventAddress: e.currentTarget.value });
    }

    render(){
        if (this.state.currentInput === 0) {
            return (
                <div className='event-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='event-form-content'>
                            <label>What is the name of your event
                                <br />
                                <input type="text" value={this.state.title} onChange={this.handleTitle} onKeyPress={this.switchForm}/>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='event-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 1) {
            return (
                <div className='event-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='event-form-content'>
                            <label>Where is it going to be held
                                <br />
                                <input type="text" value={this.state.eventAddress} onChange={this.handleAddress} onKeyPress={this.switchForm}/>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='event-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 2) {
            return (
                <div className='event-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='event-form-content'>
                            <label>What day does it start on
                                <br />
                                <input type="date" value={this.state.date} onChange={this.handleDate} onKeyPress={this.switchForm}/>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='event-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 3) {
            return (
                <div className='event-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='event-form-content'>
                            <label>What kind of event is it?
                                <br />
                                <input type="text" value={this.state.category} onChange={this.handleCategory} onKeyPress={this.switchForm}/>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='event-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 4) {
            return (
                <div className='event-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='event-form-content'>
                            <label>Put all additional details here
                                <br />
                                <textarea type="text" value={this.state.details} onChange={this.handleDetails} onKeyPress={this.switchForm}></textarea>
                            </label>
                        </div>
                    </form>
                    <div onClick={this.switchForm} className='event-form-next'>Next</div>
                </div>
            );
        }
        if (this.state.currentInput === 5) {
            let submitText = "Create Event";
            if(this.props.formType === 'edit'){
                submitText = "Commit Changes"
            }
            return (
                <div className='event-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='event-form-content'>
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

export default EventForm