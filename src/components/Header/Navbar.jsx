// import React from 'react';

import logo from '../../assets/main-logo.png';
import sidelogo from '../../assets/sidelogo.png';

const Navbar= () =>{
    return(
        <header>
            <nav className="nav-container">
                <img className="nav-logo" src={logo} alt="tata-motors-logo"/>
                <div className="nav-line" ></div>
                <ul>
                    <li><a>danger</a></li>
                    <li>notify</li>
                    <li>profile</li>
                    <li>drop</li>
                </ul>
                <div className="nav-line"></div>
                <img className="nav-side-logo" src={sidelogo} alt="IPMS-logo"/>
            </nav>
        </header>
    );
}

export default Navbar;