import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import React from 'react'

// CSS
import css from './navigation.css'

import CloseMenuButton from './close.svg'
import OpenMenuButton from './open.svg'

// Child Component
import NavItem from './nav-item.js'

/**
* Removes slashes from path name and formats nicely
*/
const formatPathName = (pathname) => {               
    if (pathname === '/') {
        return 'Home';
    }

    // Split if it's not route page
    let splitPathname = pathname.split("/")
    let pageName = splitPathname[1].charAt(0).toUpperCase() + splitPathname[1].slice(1)

    if (pageName) {    
        return pageName;
    }
    return '';
}
const CurrentRoute = withRouter(props => 
    <span>{formatPathName(props.location.pathname)}</span>
)


class Navigation extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           menuActive: false,
           currentPage: this.props.location
       }                
       this.toggleMenue = this.toggleMenue.bind(this)            
    }
    greet() {
        console.log('blue')
    }
   /**
    * Inverse state to toggle menu
    */
   toggleMenue() {     
        this.setState({
            menuActive: !this.state.menuActive
        })            
   }
   render() {
       return (
           <div>
               <div className="nav-header">
                    <span className="active-page">
                        <CurrentRoute/>
                    </span>
                    <div className="nav-btn" onClick={this.toggleMenue}>
                        <img src={ !this.state.menuActive ? OpenMenuButton : CloseMenuButton } />
                    </div>
                </div>

               <div id="main-nav" className= {this.state.menuActive ? 'nav-wrap active' : 'nav-wrap' }>                
                <NavigationElement test={this.toggleMenue}/>                
                </div>              
        </div>
       )       
   }
}



class NavigationElement extends React.Component {
    constructor(props) {
        super(props)             
    }
    g = () => {
        this.props.test()
    }
    render() {
        return (
    <nav>    
        <ul>
            <NavItem> 
                <NavLink exact to="/" activeClassName="active" onClick={this.g}>Home</NavLink>
            </NavItem>
            <NavItem > 
                <NavLink to="/projects" activeClassName="active" >Projects</NavLink>
            </NavItem>
            <NavItem> 
                <NavLink to="/blog" activeClassName="active" >Blog</NavLink>
            </NavItem>
            <NavItem> 
                <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
            </NavItem>                                    
        </ul>
    </nav>
)
    }
} 
export default Navigation