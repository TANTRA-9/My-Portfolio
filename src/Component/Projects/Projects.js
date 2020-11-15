import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className={style.back}>
                Projects
                </div>
            </div>
        );
    }
}

export default Projects;