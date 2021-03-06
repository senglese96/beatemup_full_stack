import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            backgroundImg: <div className='slide-fade' id='one'></div>,  
            eIndex: 0,
            gIndex: 0,
            mainSwitch: 'groups',
            currentGroups: this.props.groups,
            currentEvents: this.props.events,
            searchTerm: ''    
        }
        this.slideshowAnimation = this.slideshowAnimation.bind(this)
        this.animations = [
            <div className='slide-fade' id='one'></div>,
            <div className='slide-fade' id='two'></div>,
            <div className='slide-fade' id='three'></div>,
            <div className='slide-fade' id='four'></div>,
            <div className='slide-fade' id='five'></div>
        ];
        this.switchPage = this.switchPage.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleClick(e){
        this.props.history.push('/signup')
    }

    componentDidMount(){
        if (!this.props.loggedIn) {
            this.slideshowAnimation();
        }
        this.props.fetchEvents();
        this.props.fetchGroups();
    }

    componentDidUpdate(){
        if (!this.state.fetched && this.props.groups.length > 0  && this.props.events.length > 0) {
            this.setState({ currentGroups: this.props.groups })
            this.setState({ currentEvents: this.props.events })
            this.setState({ fetched: true })
        }
    }

    slideshowAnimation(){
        let that = this
        setInterval(() => {
            let banana = this.animations.shift()
            this.animations.push(banana);
            that.setState({backgroundImg: this.animations[0]})
        }, 15000)
    }

    handleSearch(e){
        let newTerm = e.currentTarget.value
        this.setState({searchTerm: newTerm})
        if(this.state.mainSwitch === 'groups'){
            const newGroups = []
            this.props.groups.forEach(group => {
                if(group.name.toLowerCase().includes(newTerm.toLowerCase())){
                    newGroups.push(group)
                }
            })
            this.setState({currentGroups: newGroups})
        } else{
            const newEvents = [];
            this.props.events.forEach(event => {
                if (event.title.toLowerCase().includes(newTerm.toLowerCase())) {
                    newEvents.push(event)
                }
            })
            this.setState({currentEvents: newEvents})
        }
    }

    switchPage(){
        if(this.state.mainSwitch === 'groups'){
            this.setState({mainSwitch: 'events'})
        }else{
            this.setState({mainSwitch: 'groups'})
        }
    }

    render(){
        if(!this.props.loggedIn){
            let currGroups = this.props.groups.slice(this.state.gIndex, this.state.gIndex + 4);
            let currEvents = this.props.events.slice(this.state.eIndex, this.state.eIndex + 3);
            return(
                <>
                <div className="main-greeting">
                    <div  className='banana'>
                        {this.state.backgroundImg}
                    </div>
                    <h2>Battlefield is calling</h2>
                    <p>Find tournaments for fighting games in your area</p>
                    <div className="greeting-button" onClick={this.handleClick}>
                        Get Brawling
                    </div>
                </div>
                <div className='unlogged-main-content'>
                    <h3>Events near you</h3>
                    <div className="unlogged-events-index">
                        
                        {currEvents.map(event => {
                            return(<Link to={'/events/' + event.id}><div className='unlogged-event-index-item'>
                                <ul className='unlogged-event-info'>
                                    <li className='unlogged-event-date'>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                    <li className='unlogged-event-title'>{event.title}</li>
                                    <li className='unlogged-event-address'>{event.eventAddress}</li>
                                </ul>
                            </div>
                            </Link>
                            )
                        })}
                    </div>
                    <h3>Groups near you</h3>
                    <div className="unlogged-group-index">
                        {currGroups.map(group => {
                            return(<Link to={'/groups/' + group.id}>
                                <div className='unlogged-group-item'>
                                    <ul className='unlogged-group-info'>
                                        <li className='unlogged-group-category'>{group.category}</li>
                                        <li className='unlogged-group-name'>{group.name}</li>
                                    </ul>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                </div>
                </>
            )
        }else{
            let groupButton;
            let calendarButton;
            let currIndex;
            if(this.state.mainSwitch === 'groups'){
                groupButton = <div className='group-index-button' id='pressed'>Groups</div>
                calendarButton = <div className='event-index-button' onClick={this.switchPage}>Calendar</div>
                currIndex = <div className='logged-index'>
                <h3>Suggested Groups</h3>
                    <div className="logged-group-index">
                        {this.state.currentGroups.map(group => {
                            return (<Link to={'/groups/' + group.id}>
                                <div className="logged-group-item" style={{backgroundImage: `url(${group.photoUrl})`}}>
                                    {/* <img src={group.photoUrl} id="logged-group-image"/> */}
                                    <h3>{group.name}</h3>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                </div>
            }else{
                groupButton = <div className='group-index-button' onClick={this.switchPage}>Groups</div>
                calendarButton = <div className='event-index-button' id='pressed'>Calendar</div>
                let eventDate
                currIndex = <div className='logged-index'>
                    <h3>Upcoming Events</h3>
                    <div className='logged-event-index'>

                        {this.state.currentEvents.map(event => {
                            if(eventDate === undefined || eventDate < new Date(event.date)){
                                eventDate = new Date(event.date)
                                return(
                                    <>
                                    <h3>{eventDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase()}</h3>
                                    <div className='logged-event-item'>
                                        <div className='logged-event-title'><Link to={'/events/' + event.id}>{event.title}</Link></div>
                                        <div className='logged-event-attendees'>{event.attendeeIds.length} people are attending this</div>
                                    </div>
                                    </>
                                )
                            } else{
                                return(
                                    <div className='logged-event-item'>
                                        <div className='logged-event-title'><Link to={'/events/' + event.id}>{event.title}</Link></div>
                                        <div className='logged-event-attendees'>{event.attendeeIds.length} people are attending this</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }
            return(
                <div className="logged-main-page">
                    <div className="logged-greeting">
                        <h1>Find your next event</h1>
                        <p>There are {this.props.events.length} events in your area</p>
                    </div>
                    <div className='logged-group-container'>
                        <div className='logged-search-bar'>
                            <input type="text" value={this.state.searchTerm} onChange={this.handleSearch}/>
                            <div className='page-selector'>
                                {groupButton}
                                {calendarButton}
                            </div>
                        </div>
                        {currIndex}
                    </div>
                </div>
            )
        }
    }
}

export default MainPage;