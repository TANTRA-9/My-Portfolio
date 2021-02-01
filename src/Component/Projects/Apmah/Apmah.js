import React, { Component } from 'react';
import style from './Apmah.css';
import { FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Carousel } from 'react-bootstrap';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

class Apmah extends Component {

    back = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className={style.apmah}>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                <FiArrowLeftCircle className={style.back} onClick={this.back}/>
                <h1>APMAH</h1>
                <div className={style.tagBox}>
                    <h2>About Project</h2>
                </div>
                <h3>Short Description :- </h3>
                <p>Andoird social dating app allow you to connect with people world wide. Find your mate and connect with them by sending friend request. It provides you messaging facility to chat with closer ones easily.</p>
                <h3>Features :-</h3>
                <p>1. <span>Messaging</span> :- Real time messaging with friends using firebase real time database and message will store in the firebase database.</p>
                <br /><p>2. <span>Authentication and verification</span> :- User sign up and login with firebase with real gmail verification.</p>
                <br /><p>3. <span>Online storage and update</span> :- All your data stored online firebase database and in storage, you can update your data through application like profile picture status and name whenever you need.</p>
                <br /><p>4. <span>Privacy and connectivity</span> :- Everyone can see your profile, but no one can message you directly until you accept his/her friend request after you become friends you are able to chat with each other.</p>
                <div className={style.tagBox}>
                    <h2 style={{ marginBottom: "40px" }}>Project Images</h2>
                </div>
                <div className={style.images}>
                    <Carousel>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={style.links}>
                <h2 style={{marginTop:"-20px",textDecoration:"underline"}}>Project Links</h2>
                    <h5><span>
                        <a href="https://mega.nz/file/D9o3hAbb#hj3fHluV1qnZnDGU7gXw5l5nieh0GokUKL78pxuNgwU" target="_blank" rel="noopener noreferrer"><FaCloudDownloadAlt size="40px" className={style.download} />
                        </a></span> <span>
                            <a href="https://github.com/TANTRA-9/APMAH.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub size="35px" className={style.github} />
                            </a></span>
                    </h5>
                </div>
            </div>
        );
    }
}

export default Apmah;