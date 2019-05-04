import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            backgroundImg: <div className='slide-fade' id='one' style={{ width: '100%' }}></div>,  
            eIndex: 0,
            gIndex: 0     
        }
        this.slideshowAnimation = this.slideshowAnimation.bind(this)
        this.animations = [
            <div className='slide-fade' id='one' style={{ width: '100%' }}></div>,
            <div className='slide-fade' id='two' style={{ width: '100%' }}></div>,
            <div className='slide-fade' id='three' style={{ width: '100%' }}></div>,
            <div className='slide-fade' id='four' style={{ width: '100%' }}></div>,
            <div className='slide-fade' id='five' style={{ width: '100%' }}></div>
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
            let currGroups = this.props.groups.slice(this.state.gIndex, this.state.gIndex + 3);
            let currEvents = this.props.events.slice(this.state.eIndex, this.state.eIndex + 3);
            debugger
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
                <div className="unlogged-main-events-index">
                    {currEvents.map(event => {
                        return(<span className='unlogged-event-index-item'>
                            <h3>{event.date}</h3>
                            <div>{event.title}</div>
                            <div>{event.location}</div>
                        </span>
                        )
                    })}
                </div>
                </>

            )
        }else{
            return(
                <div>
                    
                </div>
            )
        }
    }
}

export default MainPage;