import React, { Component } from 'react'

class Biography extends Component {

    state = { displayBio: false }

    toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio })
    }
    render(){
        return(
            <div className="container center">
                <h4 className="indigo-text text-darken-4">My name is Elisandro. I'm a web developer.</h4>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in High Wycombe, and code every day.</p>
                        <p>My favorite language is JavaScript, and I think React.js is awesome!!</p>
                        <p>Besides coding, I also love music and pizza!</p>
                        <button className="waves-effect waves-light btn" onClick={this.toggleDisplayBio}>Read less</button>
                    </div>
                    ) : (
                    <div>
                        <button className="waves-effect waves-light btn" onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                    )
                }
            </div>

        )
    }
}

export default Biography