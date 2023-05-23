import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Chart from '../../component/chart/Chart';
import './home.scss'
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ForumIcon from '@mui/icons-material/Forum';
import PaidIcon from '@mui/icons-material/Paid';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import LocalTaxiTwoToneIcon from '@mui/icons-material/LocalTaxiTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import puce from "../../assets/puce-removebg-preview.png"
import mastercard from "../../assets/mastercard.png"


function Home() {
   
    return(
        <div className='home'>
            <Navbar />
            <div className="body">
                <div className="left">
                    <div className="content">
                        <HomeIcon />
                        Overview
                    </div>
                    <div className="content">
                        <MailOutlineIcon />
                        Messages
                    </div>
                    <div className="content">
                        <ForumIcon />
                        Community
                    </div>
                    <div className="content">
                        <PaidIcon />
                        Transactions
                    </div>
                    <div className="content">
                        <InsightsIcon />
                        Analytics
                    </div>
                    <div className="bottom">
                        <div className="content">
                            <AccountCircleOutlinedIcon />
                            Account
                        </div>
                        <div className="content">
                            <LogoutOutlinedIcon />
                            Logout
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-left">
                        <div className="top">
                            <div className="top-left">
                                <div className="card-img">
                                    <div className="card-name">
                                        <span>Credit Card</span>
                                        <span>DMM Bank</span>
                                    </div>
                                    <div className="puce">
                                        <img src={puce} alt="card-puce" />
                                    </div>
                                    <div className="card-number">
                                        <span>1234</span>
                                        <span>1234</span>
                                        <span>1234</span>
                                        <span>1234</span>
                                    </div>
                                    <div className="card-exp">
                                        <span>Valable to</span>
                                        <span>01/34</span>
                                    </div>
                                    <div className="card-user">
                                        <span>PEZONGO MICKAEL</span>
                                        <img src={mastercard} alt="mastercard" />
                                    </div>
                                </div>
                            </div>
                            <div className="top-right">
                                <div className="content">
                                    <div className="content-box">
                                        <div className="icon">
                                            <MonetizationOnRoundedIcon />
                                        </div>
                                        <h3>Balance</h3>
                                        <span>Actually balance</span>
                                        <h2>$4,000.00</h2>
                                    </div>
                                    <div className="content-box">
                                        <div className="icon">
                                            <LocalAtmRoundedIcon />
                                        </div>
                                        <h3>Salary</h3>
                                        <span>Regular payment</span>
                                        <h2>$4,000.00</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>Recent transactions</h3>
                            <div className="content">
                                <div className="icon">
                                    <LocalTaxiTwoToneIcon />
                                </div>
                                <div className="name">
                                    Taxi trips
                                </div>
                                <div className="date">
                                    03 Aug 2022, 15:45
                                </div>
                                <div className="price">
                                    <h3>$56.50</h3>
                                </div>
                                <div className="more">
                                    <MoreHorizTwoToneIcon />
                                </div>
                            </div>
                                <hr />
                            <div className="content">
                                <div className="icon">
                                    <LocalTaxiTwoToneIcon />
                                </div>
                                <div className="name">
                                    Taxi trips
                                </div>
                                <div className="date">
                                    03 Aug 2022, 15:45
                                </div>
                                <div className="price">
                                    <h3>$56.50</h3>
                                </div>
                                <div className="more">
                                    <MoreHorizTwoToneIcon />
                                </div>
                            </div>
                                <hr />
                            <div className="content">
                                <div className="icon">
                                    <LocalTaxiTwoToneIcon />
                                </div>
                                <div className="name">
                                    Taxi trips
                                </div>
                                <div className="date">
                                    03 Aug 2022, 15:45
                                </div>
                                <div className="price">
                                    <h3>$56.50</h3>
                                </div>
                                <div className="more">
                                    <MoreHorizTwoToneIcon />
                                </div>
                            </div>
                                <hr />
                            <div className="content">
                                <div className="icon">
                                    <LocalTaxiTwoToneIcon />
                                </div>
                                <div className="name">
                                    Taxi trips
                                </div>
                                <div className="date">
                                    03 Aug 2022, 15:45
                                </div>
                                <div className="price">
                                    <h3>$56.50</h3>
                                </div>
                                <div className="more">
                                    <MoreHorizTwoToneIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-right">
                        <div className="top">
                            <div className="depenses">
                                <span>Daily Spent</span>
                                <h2>$367.87</h2>
                            </div>
                            <div className="chart">
                                <Chart/>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>Available cards</h3>
                            <div className="cart">
                                <div className="price">
                                    <h2>98,500 <span>USD</span></h2>
                                </div>
                                <div className="numer">
                                    ....4141
                                </div>
                                <div className="card">
                                    <TollTwoToneIcon />
                                </div>
                            </div>
                            <div className="cart">
                                <div className="price">
                                    <h2>98,500 <span>USD</span></h2>
                                </div>
                                <div className="number">
                                    ....4141
                                </div>
                                <div className="card">
                                    <h3>VISA</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;