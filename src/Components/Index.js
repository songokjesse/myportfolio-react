import React, { Component } from 'react';
import Pic from '../me.svg';
class Index extends Component {
    render() {
        return (
            <div className="imgradient">
                <div className="container">
                    <img src={Pic} alt="pic" className="my-4 myimage img-fluid img-thumbnail rounded-circle" />

                    <div className="jumbotron py-2">
                        <h1 className="display-4">Full Stack Software Developer</h1>
                            <hr/>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                            <p className="lead">
                                <span className="iconSize">
                                <i className="fab fa-linkedin"></i> &nbsp;
                                <i className="fab fa-github"></i> &nbsp;
                                <i className="fab fa-twitter-square"></i> &nbsp;
                                <i className="fab fa-medium"></i>
                                </span>
                            </p>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Index;
