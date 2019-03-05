import React, { Component } from 'react';
import Pic from '../me.svg';
class Index extends Component {
    render() {
        return (
            <div className="imgradient">
                <div className="container">
                    <img src={Pic} alt="pic" className="my-4 myimage img-fluid img-thumbnail rounded-circle" />
                </div>
            </div>
        );
    }
}

export default Index;
