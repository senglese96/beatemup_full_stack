import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.history.push('/signup')
    }

    render(){
        if(!this.props.loggedIn){
            return(
                <div className="main-greeting">
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