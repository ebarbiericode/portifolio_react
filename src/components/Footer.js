import React from 'react'

const Footer = () => {
    return(
        <div className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h5>About Me</h5>
                        <p>
                            I like to see myself as a simple guy. 
                            I have my hobbies, I love playing guitar and 
                            playing video game in my spare time. 
                            I am married and the father of a beautiful son.
                            I really like what I do, programming is part of my daily routine, 
                            I'm always trying to learn something new.
                        </p>
                        <p>Follow me on my social networks.</p>
                        <p>Regards.</p>
                        <p>Elisandro Barbieri</p>

                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h5>Connect</h5>
                        <ul>
                            <li><a href="http://facebook.com/elisandro.barbieri" target="_blank" className="grey-text text-lighten-3">Facebook</a></li>
                            <li><a href="https://twitter.com/elisandrob" target="_blank"  className="grey-text text-lighten-3">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/elisandro-barbieri" target="_blank"  className="grey-text text-lighten-3">LinkedIn</a></li>
                            <li><p className="grey-text text-lighten-3">Email: elisandro.barbieri@gmail.com</p></li>
                            <li><p className="grey-text text-lighten-3">Phone: +39 366 931 1630</p></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer-copyright grey darken-4">
                <div className="container center-align">&copy; 2019 EBCODE</div>
            </div>
        </div>
    )
}

export default Footer 