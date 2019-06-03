import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Biography from './Biography'
import './styles/projects.css'
import stars from '../assets/img/stars.jpg'

const Content = () => {
    return(
        <div>
            <Biography />
            <Skills />
            <div className="parallax-container">
                <div className="parallax">
                    <img src={stars} alt="stars" className="responsive-img"/>
                </div>
            </div>}
            <Projects />
        </div>
    )
}

export default Content