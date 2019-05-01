import React from 'react';
import { Link, Redirect, Route} from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.loggedIn){
            return(
                <div className="main-greeting">
                    <h2>Battlefield is calling</h2>
                    <p>Find tournaments for fighting games in your area</p>
                    <div className="greeting-button">
                        <Link to='/signup'>Get Brawling</Link>
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