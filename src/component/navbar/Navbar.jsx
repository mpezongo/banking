import React from 'react';
import logo from "../../assets/DM2.png"
import Profile from '../../assets/profile.jpeg'
import './navbar.scss'

function Navbar(){
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <span>OurCompany</span>
                </div>
                <div className="middle">
                    <input type="search" value='search' />
                </div>
                <div className="right">
                    <span>Pezongo Mickael</span>
                    <img src={Profile} alt="profile" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;