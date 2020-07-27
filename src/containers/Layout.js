import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/back-to-top.png';
import Welcome from '../components/Welcome';


const CustomLayout = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">

                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Home</Link>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/guide" className="nav-link">使用指南💡</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/comments" className="nav-link">留言区</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="main container">
                <Welcome />
                {props.children}
            </div>


            <Back2Top />
            <footer className="footer">
                <div className="container">
                    <p class="text-muted">tmszd🔒@Jladygoogoo</p>
                </div>
            </footer>
        </div>
    );
}

const Back2Top = () => {
    return (
        <div className="back-to-top">
            <a href="#title">
                <img src={logo} width="30px" />
            </a>
        </div>
    );
}

export default CustomLayout;