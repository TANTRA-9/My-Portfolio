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
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                <Navbar backColor="#000000" navBackColor="#000000" />
                <div className={style.back} id="home">
                    <h1 className={style.hello}>Hello!</h1>
                    <h2 className={style.nishant}>I'm Nishant full stack web developer.</h2>
                </div>

                <div className={style.project} id="project">
                    <div className={style.card1}>
                        <h1>Nishant</h1>
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={img1} alt="" />
                            <div class="card-body">
                                <h5 class="card-title" style={{fontWeight:"bold"}}>Apmah</h5>
                                <p class="card-text">Andoird social dating app allow you to connect with people world wide.
                                It provides you messaging facility to chat with closer ones easily.</p>
                                <a href="https://mega.nz/file/D9o3hAbb#hj3fHluV1qnZnDGU7gXw5l5nieh0GokUKL78pxuNgwU"
                                target="_blank" rel="noopener noreferrer" className={style.btn}>To Application <HiArrowRight/></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.card1}>
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={img2} alt="" />
                            <div class="card-body">
                                <h5 class="card-title" style={{fontWeight:"bold"}}>Stay-Fit</h5>
                                <p class="card-text">This Webiste Helps You To Find Hospitals Near You And Fix Your Appointment Remotely.</p>
                                <a href="https://stayfit-d84a1.web.app" target="_blank" rel="noopener noreferrer" className={style.btn}>To Website <HiArrowRight/></a>
                            </div>
                        </div>
                        <h1>Tomar</h1>
                    </div>
                </div>
                <div className={style.about} id="about">
                </div>
            </div>
        );
    }
}

export default Home;