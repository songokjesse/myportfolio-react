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
                            <p className="lead">Laravel &nbsp; Nodejs &nbsp; Express &nbsp; Django &nbsp; Flask &nbsp; Vuejs &nbsp; Reactjs &nbsp; Postgresql &nbsp; MongoDB &nbsp; Mysql &nbsp; (Docker & Kubernetes )</p>
                            <p className="lead">
                                <span className="iconSize">
                                    <a href="https://www.linkedin.com/in/jesse-songok-3524a060/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>&nbsp;
                                    <a href="https://github.com/songokjesse" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>&nbsp;
                                    <a href="https://twitter.com/wezeshafrica" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter-square"></i></a>&nbsp;
                                    <a href="https://medium.com/@jessesongok" rel="noopener noreferrer" target="_blank"><i className="fab fa-medium"></i></a>
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
