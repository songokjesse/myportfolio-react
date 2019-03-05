import React, { Component } from 'react';
import Pic from '../me.svg';
class Index extends Component {
    render() {
        return (
            <div className="container">
                <img src={Pic} alt="pic" className="img-fluid img-thumbnail rounded-circle"/>
            </div>
        );
    }
}

export default Index;
