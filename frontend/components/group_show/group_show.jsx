import React from 'react';

class GroupShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render(){
        if(this.props.users.length != 0){
            let organizer = null;
            this.props.users.forEach(el => {
                if(el.id == this.props.group.organizerId){
                    organizer = el
                }
            })
            let eventButton = null
            if(!this.props.currentUser || !(this.props.users.includes(this.props.currentUser))){
                eventButton = <div className='join-group-button'>Join This Group</div>
            }
            else if(this.props.currentUser.id === this.props.group.organizerId){
                eventButton = <div className='join-group-button'>Create Group Event</div>
            }else{
                eventButton = <div className='joined-group-button'>Join This Group</div>
            }
            return(
                <>
                <div className='group-show-background'></div>
                <div className='group-show-container'>
                    <div className='group-show-header'>
                        <div className='group-image-show'></div>
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
                        </div>
                        <div className='group-organizer'>
                            <h1>Group Organizer</h1>
                            <div>{organizer.username}</div>
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