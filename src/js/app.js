import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css'; //import stylesheet
import keenImage from '../assets/keen.png'; //importing commander keen png

class Hello extends Component {
    render(){
        return (
            <div>
                Hello from react
                <img src= {keenImage} alt="Commander Keen" />
            </div>
        );
    }
}

export default Hello

render(<Hello />, document.getElementById("app"));