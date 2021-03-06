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
                    <Link to='/' className="home-button"><img src="/beatemup_logo.png" height="70px"/></Link>
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
                    <Link to='/'><img src="/beatemup_logo.png" height="70px" /></Link>
                    <span className='logged-nav-buttons'>
                        <Link to='/newgroup' id='new-group-button'>Start a new group</Link>
                        <Link  className='other-nav-button' to='/'>Explore</Link>
                        <button onClick={this.props.logout}>Logout</button>
                    </span>
                </div>
            )
        }
    }
}

export default NavBar