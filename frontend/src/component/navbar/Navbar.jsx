import React, { useState } from 'react';
import logo from "../../assets/DM2.png"
import profile from '../../assets/profile.jpeg'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar(){
    const [search, setSearch] = useState("")
    const handleChange = (event) =>{
        setSearch((prev) => ({
            ...prev, [event.target.name]:event.target.value
        }));
    }
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <span>OurCompany</span>
                </div>
                <div className="middle">
                    <div className="middle-content">
                        <SearchIcon />
                        <input type="search" placeholder='search' onChange={handleChange}/>
                    </div>
                </div>
                <div className="right">
                    <div className="lang">
                        <SettingsIcon />
                    </div>
                    <NotificationsNoneIcon />
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;