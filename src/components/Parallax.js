import React from 'react'
import stars from '../assets/img/stars.jpg'

const Parallax = () => {
    return(
        <div className="parallax-container">
            <div className="parallax">
                <img src={stars} alt="" className="responsive-img"/>
            </div>
        </div>
    )
}

export default Parallax