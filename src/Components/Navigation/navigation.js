import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import React from 'react'

// CSS
import './navigation.css'

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

/**
 * Current Route for header menu
 */
const CurrentRoute = withRouter(props => 
    <span>{formatPathName(props.location.pathname)}</span>
)
/**
 * Navigation Parent Sidebar
 */
class Navigation extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           menuActive: false           
       }                
       this.toggleMenue = this.toggleMenue.bind(this)            
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
               <div className={`nav-header ${this.state.menuActive ? 'fixed' : null }`}>
                    <span className="active-page">
                        <CurrentRoute/>
                    </span>
                    <div className="nav-btn" onClick={this.toggleMenue}>
                        <img src={ !this.state.menuActive ? OpenMenuButton : CloseMenuButton } alt="Menu Icon"/>
                    </div>
                </div>

               <div id="main-nav" className= {this.state.menuActive ? 'nav-wrap active' : 'nav-wrap' }>                
                <NavigationElement toggleMenu={this.toggleMenue}/>                
                </div>              
        </div>
       )       
   }
}
/**
 * Navigation Links 
 */
class NavigationElement extends React.Component {    
    toggleMenu = () => {
        this.props.toggleMenu()
    }
    render() {
        return (
    <nav>    
        <ul>
            <NavItem> 
                <NavLink exact to="/" activeClassName="active" onClick={this.toggleMenu}>Home</NavLink>
            </NavItem>
            <NavItem > 
                <NavLink to="/projects" activeClassName="active" onClick={this.toggleMenu}>Projects</NavLink>
            </NavItem>
            <NavItem> 
                <NavLink to="/blog" activeClassName="active" onClick={this.toggleMenu}>Blog</NavLink>
            </NavItem>
            <NavItem> 
                <NavLink to="/contact" activeClassName="active" onClick={this.toggleMenu}>Contact</NavLink>
            </NavItem>                                    
        </ul>
    </nav>
)
    }
} 
export default Navigation