import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(!(this.props.loggedIn)){
            return(
                <div className="nav-bar">
                    <Link to='/' className="home-button">BeatEmUp</Link>
                    <span>
                        <Link to='/login'>Log In</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </span>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Link to='/'>BeatEmUp</Link>
                    <div>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
            )
        }
    }
}

export default NavBar