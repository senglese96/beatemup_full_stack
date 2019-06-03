import React from 'react';
import  { Link } from 'react-router-dom'

class GroupShow extends React.Component{
    constructor(props){
        super(props);
        this.fetched = false;
        this.joinThisGroup = this.joinThisGroup.bind(this)
    }

    componentDidMount(){
        this.props.fetchGroup(this.props.match.params.groupId);
        this.fetched = true
    }

    joinThisGroup(){
        this.props.joinGroup(this.props.group.id);
    }

    render(){
        if(this.fetched){
            let organizer = null;
            this.props.users.forEach(el => {
                if(el.id == this.props.group.organizerId){
                    organizer = el
                }
            })
            let eventButton = null
            if (!this.props.currentUser){
                eventButton = <Link to='/login'><div className='join-group-button'>Join This Group</div></Link>
            }
            else if(!(this.props.users.includes(this.props.currentUser))){
                eventButton = <div className='join-group-button' onClick={this.joinThisGroup}>Join This Group</div>
            }
            else if(this.props.currentUser.id === this.props.group.organizerId){
                eventButton = <Link to={{
                    pathname: '/newevent',
                    state: {
                        groupId: this.props.group.id
                    }
                }}><div className='join-group-button'>Create Group Event</div></Link>
            }else{
                eventButton = <div className='joined-group-button'>Group Joined</div>
            }
            return(
                <>
                <div className='group-show-background'>
                <div className='group-show-container'>
                    <div className='group-show-header'>
                        <div className='group-image-show'><img src={this.props.group.photoUrl}/></div>
                        <div className='group-header-info'>
                            <h1>{this.props.group.name}</h1>
                            <ul>
                                <li>{this.props.group.location}</li>
                                <li>{this.props.users.length} members</li>
                            </ul>
                        </div>
                    </div>
                    <div className='group-show-navigation'>
                        {eventButton}
                    </div>
                    <div className='group-show-details'>
                        <div className='group-show-desc'>
                            <h1>What we're about</h1>
                            <p>{this.props.group.description}</p>
                                <div className='group-show-events'>
                                    <h1>Upcoming Events</h1>
                                    {this.props.events.map(event => {
                                        let currDate = new Date();
                                        if (currDate < new Date(event.date)) {
                                            return (<Link to={'/events/' + event.id}><div className='group-show-event-item'>
                                                <ul className='unlogged-event-info'>
                                                    <li className='unlogged-event-date'>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                                    <li className='unlogged-event-title'>{event.title}</li>
                                                    <li className='unlogged-event-address'>{event.eventAddress}</li>
                                                </ul>
                                            </div>
                                            </Link>
                                            )
                                        }
                                    })}
                                </div>
                        </div>
                        <div className='group-organizer'>
                            <h1>Group Organizer</h1>
                            <div>{organizer.username}</div>
                        </div>
                    </div>
                </div>
                </div>
                </>
            )
        } else{
            return(<div></div>)
        }
    }
}

export default GroupShow;