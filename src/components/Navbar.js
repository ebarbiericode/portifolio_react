import React from 'react'
import './styles/navbar.css'
import imgPerfil from '../assets/fotoperfilrec.jpg' 
const Navbar = () => {
    return(
        <div>
            <header>
                <nav className="nav-wrapper transparent">
                    <div className="container">
                        <img className="imgPerfil" src={imgPerfil} alt=""/>
                        <a href="#header" className="brand-logo">ebCode</a>
                        <a href="#header" className="sidenav-trigger" data-target="mobile-menu">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#services">About</a></li>

                            <li><a href="https://www.linkedin.com/in/elisandro-barbieri" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="LinkedIn">
                                <i className="fab fa-linkedin"></i>    
                            </a></li>
                            <li><a href="https://twitter.com/elisandrob" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Twitter">
                                <i className="fab fa-twitter"></i>    
                            </a></li>
                            <li><a href="https://github.com/ebarbiericode" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Github">
                                <i className="fab fa-github"></i>    
                            </a></li>
                        </ul>
                        <ul className="sidenav grey lighten-2 black-text" id="mobile-menu">
                        <li><a href="#header">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#services">About</a></li>

                            <li><a href="https://www.linkedin.com/in/elisandro-barbieri" className="tooltipped grey lighten-2" data-tooltip="LinkedIn">
                                <i className="fab fa-linkedin"></i>    
                            </a></li>
                            <li><a href="https://twitter.com/elisandrob" className="tooltipped grey lighten-2" data-tooltip="Twitter">
                                <i className="fab fa-twitter"></i>    
                            </a></li>
                            <li><a href="https://github.com/ebarbiericode" className="tooltipped grey lighten-2" data-tooltip="Github">
                                <i className="fab fa-github"></i>    
                            </a></li>
                        </ul>
                    </div>
                </nav>
                <div className="typewriter ">
                    <p className="flow-text">Let's do something great?!</p>
                </div>
            </header>
        </div>
    )
}

export default Navbar