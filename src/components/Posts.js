import React from 'react'

class Posts extends React.Component{
    state = {
        posts: ''
    }

    render(){
        return(
            <div className="container">
                <h3 className="indigo-text text-darken-4">Blog</h3>
                <div className="card">
                    <div className="card-title indigo-text text-darken-4"><link rel="stylesheet" href=""/></div>
                    <div className="card-content">
                        This is a Post!
                    </div>
                </div>
                <div className="card">
                    Post2
                </div>
            </div>
        )
    }
}

export default Posts