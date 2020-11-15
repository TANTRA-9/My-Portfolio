import React, { Component } from 'react';
import style from './Home.css';
import Navbar from '../Navbar/Navbar';

class Home extends Component {
    render() {
        return (
            <div className={style.back}>
                <Navbar backColor="#000000" navBackColor="#000000"/>
                <h1>Hello!</h1>
                <h2>I'm Nishant a full stack web developer.</h2>
            </div>
        );
    }
}

export default Home;