import React, { useState } from 'react';
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import key from '../../assets/ssh_key'
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';


function Home() {
   
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        vm_name:"",
        vm_image:"ubuntu_image",
        vm_flavor:"m1.xl"
    })
    const [formSuccess, setFormSuccess] = useState("");
    const fetchData = async () => {
        const response = await axios.post("http://localhost:5005/api/VM/getVM", {}, {
          withCredentials: true,
        });
        return response.data;
      };
      
      const { isLoading, error, data } = useQuery("vmData", fetchData);

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const res = await axios.post("http://localhost:5005/api/VM/Create", formData, {
                withCredentials:true,
            });
            setFormSuccess(res.data.message);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(formSuccess);
    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev, [event.target.name]:event.target.value
        }));
    }
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
                                            <CloudDoneOutlinedIcon />
                                        </div>
                                        <h3>Total VM</h3>
                                        {data ? <h2>{data.length }</h2>:0}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>Machine Virtuelle active</h3>
                            <div className="content">
                                <div className="box">
                                    Nom
                                </div>
                                <div className="box">
                                    Adresse IP
                                </div>
                                <div className="box">
                                    Memoire
                                </div>
                                <div className="box">
                                    RAM
                                </div>
                                <div className="box">
                                    Distribution
                                </div>
                                <div className="box">
                                    <MoreHorizTwoToneIcon />
                                </div>
                            </div>
                                <hr />
                            {error ? (
                                <div>Something went wrong!</div>
                                ) : isLoading ? (
                                <div>Loading...</div>
                                ) : (
                                <div>
                                    {data.map((vm) => (
                                    <div key={vm.idvm} className="content">
                                        <div className="box">
                                            {vm.vm_name}
                                        </div>
                                        <div className="box">
                                            {vm.vm_ip}
                                        </div>
                                        <div className="box">
                                            {vm.vm_rom}Go
                                        </div>
                                        <div className="box">
                                            {vm.vm_ram == 512 ? <span>{vm.vm_ram}Mo</span>:<span>{vm.vm_ram}Go</span> }
                                        </div>
                                        <div className="box">
                                            {vm.vm_dist}
                                        </div>
                                        <div className="box">
                                            <MoreHorizTwoToneIcon />
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right-right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='vm_name' placeholder='Nom de la VM' onChange={handleChange} required/>
                            <select name="vm_image" id="dist" onChange={handleChange}>
                                <option value="ubuntu_image">Ubuntu</option>
                                <option value="centos_image">Centos</option>
                                <option value="debian_image">Debian</option>
                                <option value="windows_image">Windows</option>
                            </select>
                            <select name="vm_flavor" onChange={handleChange}>
                                <option value="m1.xl">5Go ROM et 512Mo RAM</option>
                                <option value="m1.xxl">10Go ROM et 1GB RAM</option>
                                <option value="m1.xxxl">15Go ROM et 2GB RAM</option>
                                <option value="m1.xxxxl">20Go ROM et 4GB RAM</option>
                            </select>
                            <button type='submit'>Créer</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="log">
                <div>Cliquer <a href={key} download='key_ssh'>Ici</a> pour télécharger votre clé ssh privée.</div>
                <span>Pour vous connecter à une de vos machine utilisé <span className='ssh'>ssh -i "votre_clé_ssh" dist@ip</span></span>
                <span>Remplacer dist par la distribution de votre machine</span>
                <span>N'oubliez pas de donner les droits 600 à votre clé ssh</span>
            </div>
        </div>
    )
}

export default Home;