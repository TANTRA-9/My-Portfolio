import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './About.css';

class About extends Component {
    render() {
        return (
            <div>
                 <Navbar backColor="#000000" navBackColor="#000000"/>
                <div className={style.back}>check</div>
            </div>
        );
    }
}

export default About;