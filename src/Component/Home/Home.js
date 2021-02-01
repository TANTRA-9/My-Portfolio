import React, { Component } from 'react';
import style from './Home.css';
import Navbar from '../Navbar/Navbar';
import img1 from './3.jpg';
import img2 from './4.png';
import img3 from './5.jpg';
import Resume from './Resume/Nishant.pdf';
import { MdLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { HiArrowRight } from 'react-icons/hi';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub,FaHackerrank } from 'react-icons/fa';
import { ImGoogle2 } from 'react-icons/im';
import { RiDownloadCloudFill } from 'react-icons/ri';
 
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
                    <h1 style={{ paddingTop: "50px" }}>
                        Projects</h1>
                    <div className={style.card1}>
                        <div className={style.text1}>
                            <h1>Apmah</h1>
                            <p>Andoird social dating app allow you to <br />
                        connect with people world wide. <br />
                        It provides you messaging facility to <br />
                        chat with closer ones easily.</p>
                        </div>
                        <div className={style.container}>
                            <div className={style.card}>
                                <div className={`${style.face} ${style.face1}`}>
                                    <div className={style.content}>
                                        <div className={style.icon}>
                                            <img alt="" src={img1} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.face} ${style.face2}`}>
                                    <div className={style.content}>
                                        <h5>
                                            <a href="/projects/apmah">Project Detail <HiArrowRight /></a>
                                        </h5>
                                        <div className={style.stick}>
                                            <a href="https://mega.nz/file/D9o3hAbb#hj3fHluV1qnZnDGU7gXw5l5nieh0GokUKL78pxuNgwU" target="_blank" rel="noopener noreferrer">
                                                <ImGoogle2 className={style.google} size="35px" /></a>
                                            <a href="https://github.com/TANTRA-9/APMAH.git" target="_blank" rel="noopener noreferrer">
                                                <FaGithub className={style.github} size="38px" /></a>
                                            <a href="https://www.linkedin.com/in/nishant-tomar-aa2b3b184/" target="_blank" rel="noopener noreferrer">
                                                <GrLinkedin className={style.linked} size="35px" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.card2}>
                        <div className={style.container}>
                            <div className={style.card}>
                                <div className={`${style.face} ${style.face1}`}>
                                    <div className={style.content}>
                                        <div className={style.icon}>
                                            <img alt="" src={img2}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.face} ${style.face2}`}>
                                    <div className={style.content}>
                                        <h5>
                                            <a href="/projects/stay-fit">Project Detail <HiArrowRight /></a>
                                        </h5>
                                        <div className={style.stick}>
                                            <a href="https://stayfit-d84a1.web.app" target="_blank" rel="noopener noreferrer">
                                                <ImGoogle2 className={style.google} size="35px" /></a>
                                            <a href="https://github.com/TANTRA-9/Stay_Fit.git" target="_blank" rel="noopener noreferrer">
                                                <FaGithub className={style.github} size="38px" /></a>
                                            <a href="https://www.linkedin.com/in/nishant-tomar-aa2b3b184/" target="_blank" rel="noopener noreferrer">
                                                <GrLinkedin className={style.linked} size="35px" /></a>
                                        </div>
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
                <div className={style.skills} id="skills">
                    <div className={style.skillCenter}>
                        <h1>Programming Skills</h1>
                        <div className={style.skillBox}>
                            <p>React.js</p>
                            <p>70%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "70%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Express.js</p>
                            <p>60%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "60%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>MongoDb</p>
                            <p>50%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "50%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Html</p>
                            <p>90%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "90%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>css</p>
                            <p>70%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "70%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Python</p>
                            <p>90%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "90%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>C++</p>
                            <p>80%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "80%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Android</p>
                            <p>70%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "70%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Firebase</p>
                            <p>80%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "80%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Git</p>
                            <p>60%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "60%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                        <div className={style.skillBox}>
                            <p>Data Structure</p>
                            <p>90%</p>
                            <div className={style.skillBar}>
                                <div
                                    style={{ width: "90%", height: "5px", backgroundColor: "yellowgreen" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.about} id="about">
                    <div className={style.aboutBox}>
                        <img style={{ borderRadius: "50%",height:"250px" }} src={img3} alt=""
                        ></img>
                        <div>
                            <h1 style={{ paddingBottom: "5px", letterSpacing: "2px" }}>
                                ABOUT ME</h1>
                            <h4 style={{ paddingBottom: "12px", letterSpacing: "2px" }}>
                                Full Stack Web Developer</h4>
                            <p>I'm Nishant Tomar.<br />
                            I'm currently pursuing my BCA from HZU University.<br />
                            Seeking a role to enhance and explore my technical knowledge.<br />
                            I'm always energetic and eager to learn new skills.</p><br/>
                            <h3><a href="https://github.com/TANTRA-9" target="_blank" rel="noopener noreferrer"><FaGithub className={style.github} size="35px" style={{marginRight:"30px"}}/></a> 
                            <a href="https://www.linkedin.com/in/nishant-tomar-aa2b3b184" target="_blank" rel="noopener noreferrer"><GrLinkedin className={style.linked} size="33px" style={{marginRight:"30px"}}/></a>
                            <a href="https://www.hackerrank.com/TANTRA9" target="_blank" rel="noopener noreferrer"><FaHackerrank className={style.hackerrank} size="34px"/></a>
                            </h3>
                        </div>
                    </div>
                    <div className={style.resume_div}>
                        <a className={style.resume} href={Resume} download="Resume.pdf">Download Resume <RiDownloadCloudFill className={style.resume_icon} size="20px"/></a>
                    </div>
                </div>
                <div className={style.contact} id="contact">
                    <h1 style={{color:"white",textAlign:"center",letterSpacing:"2px"}}>
                        Contact Info</h1>
                    <div className={style.contactBox}>
                        <div className={style.contactBoxTag} style={{padding:"15px 40px"}}>
                            <BiPhoneCall size="30px" style={{marginRight:"-14px"}}/>
                            <div>
                                <h2>Phone</h2>
                                <p>+917505946613</p>
                            </div>
                        </div>
                        <div className={style.contactBoxTag} style={{padding:"5px 20px"}}>
                            <FiMail size="30px" style={{marginRight:"-14px"}} />
                            <div>
                                <h2>Gmail</h2>
                                <p>nishanttomar00009<br/>@gmail.com</p>
                            </div>
                        </div>
                        <div className={style.contactBoxTag} style={{padding:"5px 10px"}}>
                            <MdLocationOn size="30px" style={{marginRight:"-14px"}}/>
                            <div>
                                <h2>Address</h2>
                                <p>Paonta Sahib, Himachal<br/> Pardesh, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;