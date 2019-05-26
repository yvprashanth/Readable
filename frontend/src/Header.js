import React from "react";
import { Link } from 'react-router-dom'


const Header = (props) => {
    const homeButton = <Link to="/">Home</Link>
    const writePostButton = <Link to="/posts/new">Write a post</Link>

    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/home">Readable</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>{ homeButton }</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header