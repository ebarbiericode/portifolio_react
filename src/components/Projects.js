import React from 'react'
import {Link} from 'react-router-dom'
import './styles/projects.css'
import protexsul from '../assets/protexsul.png'
import toptracks from '../assets/toptracks.png'
import killmosquitoes from '../assets/killmosquitoes.png'

const Projects = () => {
    return(
        <div>
            <section className="container section scrollspy" id="projects">
                <div className="row">
                    <h1 className="indigo-text text-darken-4">Projects</h1>
                    <div className="col s4 l4">
                        <img src={protexsul} alt="" className="responsive-img materialboxed"/>
                        <h4 className="indigo-text text-darken-4 flow-text">ProtexSul</h4>
                        <p>
                        Responsive design site I made for a company that manufactures personal protective equipment (PPE) for industries.
                        </p>
                        <a rel="noopener noreferrer" href="https://www.protexsul.com.br" target="_blank">www.protexsul.com.br</a>
                    </div>
                    <div className="col s4 l4">
                        <img src={toptracks} alt="" className="responsive-img materialboxed"/>
                        <h4 className="indigo-text text-darken-4 flow-text">Top Tracks</h4>
                        <p>Find the most played songs of each band in spotify.</p>
                        <a href="https://github.com/ebarbiericode/top-tracks" target="_blank">TopTracks</a>
                    </div>
                    <div className="col s4 l4">
                        <img src={killmosquitoes} alt="" className="responsive-img materialboxed"/>
                        <h4 className="indigo-text text-darken-4 flow-text">Kill mosquitoes</h4>
                        <p>A litle game build with javascript. I am working on it!</p>
                        <a href="https://github.com/ebarbiericode/Kill-Mosquitoes" target="_blank">Killmosquitoes</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects