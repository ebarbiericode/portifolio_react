import React from 'react'

const Skills = () => {
            return(
                <section className="container section scrollspy" id="services">
                <div className="row">
                    <div className="col s12 l4">
                        <h2 className="indigo-text text-darken-4">What I do...</h2>
                        <p>I make web and scada applications for companies and industries. 
                            My goal is to make simple pages with good usability and appearance.
                        </p>
                   </div>
                   <div className="col s12 l6 offset-l2">
                       <ul className="tabs">
                           <li className="tab col s6">
                               <a href="#frontend" className="indigo-text text-darken-4">Front-end</a>
                           </li>
                           <li className="tab col s6">
                               <a href="#backend" className="indigo-text text-darken-4">Back-end</a>
                           </li>
                       </ul>
                       <div className="col s12" id="frontend">
                           <p className="flow-text indigo-text text-darken-4">Front-end</p>
                           <p>
                             <i className="fab fa-html5"> HTML5</i>
                           </p>
                           <p>
                             <i className="fab fa-css3-alt"> CSS3</i>
                           </p>
                           <p>
                           <i className="fab fa-js"> JAVASCRIPT (ES6)</i>
                           </p>
                           <p>
                           <i className="fab fa-react"> REACT-JS</i>
                           </p>
                       </div>
                       <div className="col s12" id="backend">
                           <p className="flow-text indigo-text text-darken-4">Back-end</p>
                           <p>
                             <i className="fab fa-php"> PHP</i>
                           </p>
                       </div>
                   </div>
                </div>

                {/* <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={responsive} alt=""/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4 center">Responsive</span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">API</span>
                                <p>Responsive web design makes your web page look good on all devices. </p>
                                <p className="font">image: <a href="https://br.freepik.com/fotos-vetores-gratis/maquete">Maquete vetor criado por starline - br.freepik.com</a></p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={api} alt=""/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4 center">Api</span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">API</span>
                                <p>Application connected with APIs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={react} alt=""/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4 center">React</span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">React</span>
                                <p>React makes the page like a desktop application, without reload each click or 
                                change of screen. </p>
                            </div>
                        </div>
                    </div>
 
                </div> */}
            </section>
        )
}

export default Skills