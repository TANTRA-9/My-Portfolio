import React, { Component } from 'react';
import style from './Navbar.css';
import { GiDoubleFaceMask } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { FaListUl } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

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
                        <li><Link to="/"><ImHome/> Home</Link></li>
                        <li><Link to="/projects"><FaListUl/> Projects</Link></li>
                        <li><Link to="/about"><BiCommentDetail/> About</Link></li>
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