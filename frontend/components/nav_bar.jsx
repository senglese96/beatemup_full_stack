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
                        <a onClick={this.props.openModal}>Sign Up</a>
                    </span>
                </div>
            )
        }
        else{
            return(
                <div className='logged-in-bar'>
                    <Link to='/'>BeatEmUp</Link>
                    <span className='nav-buttons'>
                        <Link to='/newgroup' className='new-group-button'>Start a new group</Link>
                        <Link to='/'>Explore</Link>
                        <button onClick={this.props.logout}>Logout</button>
                    </span>
                </div>
            )
        }
    }
}

export default NavBar