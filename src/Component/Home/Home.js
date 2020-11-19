import React, { Component } from 'react';
import style from './Home.css';
import Navbar from '../Navbar/Navbar';
import img1 from './3.jpg';
import img2 from './4.png';
import { HiArrowRight } from 'react-icons/hi';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar backColor="#000000" navBackColor="#000000" />
                <div className={style.back} id="home">
                    <h1>Hello!</h1>
                    <h2>I'm Nishant full stack web developer.</h2>
                </div>

                <div className={style.project} id="project">
                    <h1>Projects</h1>
                    <div className={style.card1}>
                        <div className={style.text1}>
                            <h1>Apmah</h1>
                            <p>Andoird social dating app allow you to <br />
                        connect with people world wide. <br />
                        It provides you messaging facility to <br />
                        chat with closer ones easily.</p>
                        </div>
                        <div class={style.container}>
                            <div class={style.card}>
                                <div class={`${style.face} ${style.face1}`}>
                                    <div class={style.content}>
                                        <div className={style.icon}>
                                            <img alt="" src={img1} />
                                        </div>
                                    </div>
                                </div>
                                <div class={`${style.face} ${style.face2}`}>
                                    <div class={style.content}>
                                        <h5>
                                            <a href="https://www.linkedin.com/in/adamdipinto/" target="">Application <HiArrowRight /></a>
                                        </h5>
                                        <p>This is where I network and build my professional protfolio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.card2}>
                        <div class={style.container}>
                            <div class={style.card}>
                                <div class={`${style.face} ${style.face1}`}>
                                    <div class={style.content}>
                                        <div class={style.icon}>
                                            <img alt="" src={img2}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${style.face} ${style.face2}`}>
                                    <div class={style.content}>
                                        <h5>
                                            <a href="https://www.linkedin.com/in/adamdipinto/" target="">Website <HiArrowRight /></a>
                                        </h5>
                                        <p>This is where I network and build my professional protfolio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.text2}>
                            <h1>Stay-Fit</h1>
                            <p>This Webiste Helps You To Find Hospitals <br />
                             Near You And Fix Your Appointment <br />
                              Remotely.</p>
                        </div>
                    </div>
                </div>
                <div className={style.about} id="about">
                </div>
            </div>
        );
    }
}

export default Home;