import React, { Component } from 'react';
import './StartMain.css';

class StartMain extends Component {
    render() {
        return (
        <div className='f3 tc'>
        <h1>Testing</h1>
        <p>{this.props.greeting}</p>
        </div>
        );
    }
}

export default StartMain;