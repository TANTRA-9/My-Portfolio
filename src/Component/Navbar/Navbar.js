import React, { Component } from 'react';
import style from './Navbar.css';
import { GiDoubleFaceMask } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { FaListUl,FaBrain } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { IoMdCall } from 'react-icons/io';

class Navbar extends Component {

    state = {
        check:false
    }

    show = () => {
        this.setState({check:!this.state.check});
    }

    render() {
        return (
            <div>
                <nav className={style.nav} style={{backgroundColor:this.props.backColor}}>
                    <label className={style.logo}><GiDoubleFaceMask/> NISHANT</label>
                    <ul className={style.list} 
                    style={{transform:this.state.check ? "translateX(0)":null,backgroundColor:this.props.navBackColor}}>
                        <li><a href="#home"><ImHome/> Home</a></li>
                        <li><a href="#project"><FaListUl/> Projects</a></li>
                        <li><a href="#skills"><FaBrain size="16px"/> Skills</a></li>
                        <li><a href="#about"><BiCommentDetail/> About</a></li>
                        <li><a href="#contact"><IoMdCall size="18px"/> Contact</a></li>
                    </ul>
                    <div className={style.dots} onClick={this.show}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;