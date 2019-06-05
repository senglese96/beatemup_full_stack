import React from 'react';
import { Link } from 'react-router-dom'

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.isFetched = false
        this.attendThisEvent = this.attendThisEvent.bind(this)
    }

    handleDelete(){
        this.props.deleteEvent();
        this.props.history.push('/');
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId);
        this.isFetched = true;
    }

    attendThisEvent(){
        this.props.attendEvent(this.props.event.id)
    }

    render(){
        if(this.isFetched){
            let goingButton = null
            let deleteButton = null
            let editButton = null
            let buttonLabel = <h1>Are you going?</h1>
            if (!this.props.currentUser) {
                goingButton = <Link to='/login'><div id='event-show-going-button' className="event-button">I am going</div></Link>
            }else if(this.props.host.id === this.props.currentUser.id){
                deleteButton = <div onClick={this.handleDelete} className="event-button">Delete Event</div>
                editButton = <Link to={'/editevent/' + this.props.event.id}><div className="event-button">Edit Event</div></Link>
                buttonLabel = <h1>This is your event</h1>
            }
            else if(this.props.users.includes(this.props.currentUser)){
                goingButton = <div className='event-show-already-going'>Going</div>
            }else{
                goingButton = <div id='event-show-going-button' className="event-button" onClick={this.attendThisEvent}>I am going</div>
            }
            return(
                <>
                    <div className='event-show-page'></div>
                    <div className='event-show-background'></div>
                    <div className='event-show-container'>
                        <div className='event-show-header'>
                            <div className='event-show-info'>
                                <p>{new Date(this.props.event.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <h1>{this.props.event.title}</h1>
                                <ul>
                                    <li>Hosted by {this.props.host.username}</li>
                                    <li>From {this.props.group.name}</li>
                                </ul>
                            </div>
                            <div className='event-show-buttons'>
                                {buttonLabel}
                                <p>{this.props.event.attendeeIds.length} people going</p>
                                {goingButton}
                                {deleteButton}
                                {editButton}
                            </div>
                        </div>
                        <div className='event-show-details'>
                            <h1>Details</h1>
                            <p>{this.props.event.details}</p>
                        </div>
                    </div>
                </>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
}

export default EventShow