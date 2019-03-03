import React from 'react'
import { Link } from 'react-router-dom'


// Image imports
import PlacedAppImage from '../images/placed-app.jpg'
import SugarlogImage from '../images/sugar-log-app.jpg'
import JenkinsImage from '../images/jenkins-icon.jpg'
import GoAppImage from '../images/go-icon.jpg'
import HiveHuvAppImage from '../images/hive-hub.jpg'
import BashImage from '../images/bash-icon.jpg'
import AndersenImage from '../images/andersen-ev.jpg'
import BoomerangImage from '../images/boomerang.jpg'


class ProjectGrid extends React.Component {
  renderInSequence() {
    const gridItem = document.querySelectorAll('.grid-item')
    /**
     * Control fade in of projects
     */
    gridItem.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active')
      }, 125 * index)
    })
  }
  componentDidMount() {

    // Hack to jump to the top of the project page
    window.scrollTo(0, 0)

    this.renderInSequence()
  }
  render() {
    return (
      <div className="grid-container">
        <div className={`grid-item`}>
          <Link to="/projects/andersen-ev">
            <div style={{
              backgroundImage: `url(${AndersenImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>
        <div className={`grid-item`}>
          <Link to="/projects/boomerang-messaging">
            <div style={{
              backgroundImage: `url(${BoomerangImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>
        <div className={`grid-item`}>
          <Link to="/projects/placed-app">
            <div style={{
              backgroundImage: `url(${PlacedAppImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>

        <div className={`grid-item`}>
          <Link to="/projects/go-app">
            <div style={{
              backgroundImage: `url(${GoAppImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>

        <div className={`grid-item`}>
          <Link to="/projects/sugarlog-app">
            <div style={{
              backgroundImage: `url(${SugarlogImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>
        <div className={`grid-item`}>
          <Link to="/projects/jenkins-pipelines">
            <div style={{
              backgroundImage: `url(${JenkinsImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>
        <div className={`grid-item`}>
          <Link to="/projects/hivehub-app">
            <div style={{
              backgroundImage: `url(${HiveHuvAppImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>
        <div className={`grid-item`}>
          <Link to="/projects/bash-project">
            <div style={{
              backgroundImage: `url(${BashImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}></div>
          </Link>
        </div>
      </div>
    )
  }
}

export default ProjectGrid