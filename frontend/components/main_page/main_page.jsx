import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            backgroundImg: <div className='slide-fade' id='one'></div>,  
            eIndex: 0,
            gIndex: 0     
        }
        this.slideshowAnimation = this.slideshowAnimation.bind(this)
        this.animations = [
            <div className='slide-fade' id='one'></div>,
            <div className='slide-fade' id='two'></div>,
            <div className='slide-fade' id='three'></div>,
            <div className='slide-fade' id='four'></div>,
            <div className='slide-fade' id='five'></div>
        ]
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

    slideshowAnimation(){
        let that = this
        setInterval(() => {
            let banana = this.animations.shift()
            this.animations.push(banana);
            that.setState({backgroundImg: this.animations[0]})
        }, 15000)
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
            return(
                <div className="logged-main-page">
                    <div className="logged-greeting">
                        <h1>Find your next event</h1>
                        <p>There are {this.props.events.length} events in your area</p>
                    </div>
                    <div className='logged-group-container'>
                        <h3>Suggested Groups</h3>
                        <div className="logged-group-index">
                            {this.props.groups.map(group => {
                                return (<Link to={'/groups/' + group.id}>
                                    <div className="logged-group-item">
                                        <h3>{group.name}</h3>
                                    </div>
                                </Link>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default MainPage;