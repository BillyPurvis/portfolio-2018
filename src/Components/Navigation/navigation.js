import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { WithRouter } from 'react-router-dom'
import React from 'react'

// CSS
import css from './navigation.css'

// Child Component
import NavItem from './nav-item.js'

class Navigation extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(props) {
       super(props)
       this.state = {
           menuActive: false,
           currentPage: this.props.location
       }          
       
       console.log(this.props)
       this.toggleMenue = this.toggleMenue.bind(this)        
    }
    /**
     * Component Mounted successfully
     */
    componentDidUpdate() {
        console.log(this.context)
    }
   /**
    * Inverse state to toggle menu
    */
   toggleMenue() {     
        this.setState({
            menuActive: this.state.menuActive = !this.state.menuActive
        })            
   }
   /**
    * Removes slashes from path name and formats nicely
    */
   setCurrentPageName() {           
     
    let splitPathname = window.location.pathname.split("/")
    let pageName = splitPathname[1].charAt(0).toUpperCase() + splitPathname[1].slice(1)

    if (pageName) {
        this.setState({
            currentPage: pageName ? pageName : 'Home'
        })
        return false;
    }
    return false;   
   }

   render() {
       return (
           <div>
               <div className="nav-header">
                    <span className="active-page">{this.state.currentPage}</span>
                    <div className="nav-btn" onClick={this.toggleMenue}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

               <div id="main-nav" className= {this.state.menuActive ? 'nav-wrap active' : 'nav-wrap' }>                
                <NavigationElement/>                
                </div>              
        </div>
       )       
   }
}


const NavigationElement = () => (
    <nav>
        <ul>
            <NavItem> 
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
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
export default Navigation