import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import React from 'react'

// CSS
import './navigation.css'

import CloseMenuButton from './close.svg'
import OpenMenuButton from './open.svg'

import { toggleMenu } from '../../Utils/state-functions'

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
const CurrentRoute = withRouter(props => {
    let formatCurrentPath = formatPathName(props.location.pathname)
    document.title = `Billy Purvis | ${formatCurrentPath} | Software Developer`

    return <span>{formatCurrentPath}</span>    
}
)
/**
 * Navigation Parent Sidebar
 */
class Navigation extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           menuActive: false,
           apple: ''          
       }                 
       this.toggleMenu = this.toggleMenu.bind(this)           
       this.closeMenuBody()     
    }
    
    /**
     * Close menu if the body is clicked while the menu
     * is open
     */
    closeMenuBody() {
        const el = document.querySelector('body')
        el.addEventListener('click', (e) => {
            if (e.target.id !== "primary-nav-btn" && this.state.menuActive) {                
                this.toggleMenu()                
            }
        })
    }    
   /**
    * Inverse state to toggle menu
    */
   toggleMenu() {
        this.setState({
            menuActive: toggleMenu(this.state)
        })            
   }
   render() {
       return (
           <div>
               <div className={`nav-header ${this.state.menuActive ? 'fixed' : null }`}>
                    <span className="active-page">
                        <CurrentRoute/>
                    </span>
                    <div className="nav-btn" >
                        <img onClick={this.toggleMenu} id="primary-nav-btn" src={ !this.state.menuActive ? OpenMenuButton : CloseMenuButton } alt="Menu Icon"/>
                    </div>
                </div>

               <div id="main-nav" className= {this.state.menuActive ? 'nav-wrap active' : 'nav-wrap' }>                
                <NavigationElement/>                
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
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem > 
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            </NavItem>           
            <NavItem> 
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </NavItem>                                    
        </ul>
    </nav>
)
    }
} 
export default Navigation