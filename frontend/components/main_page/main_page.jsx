import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            backgroundImg: <div className='slide-fade' id='one' style={{ width: '100%' }}></div>        
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
    }

    slideshowAnimation(){
        let that = this
        setInterval(() => {
            let tempt = this.animations.shift()
            this.animations.push(tempt);
            that.setState({backgroundImg: this.animations[0]})
        }, 15000)
    }

    render(){
        if(!this.props.loggedIn){
            return(
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