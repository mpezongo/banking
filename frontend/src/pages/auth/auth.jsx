import './auth.scss';
import logo from "../../assets/DM2.png"
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useState, useContext } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../controllers/authControllers";

function Auth() {

    const Navigate = useNavigate();
    const  { login } =  useContext(AuthContext);
  const [loginPage, setLogin] = useState('active');
  const [formRegisterData, setFormRegisterData] = useState({
    nom:"",
    prenom:"",
    email:"",
    tel:"",
    adresse:"",
    password:"",
    confirmPassword:""
  });
  const [formLoginData, setFormLoginData] = useState({
    email:"",
    password:"",
  });

  const handleSubmitRegister = async (event) => {
    event.preventDefault();

    try {
        await axios.post("http://localhost:5005/api/auth/register", formRegisterData);
        window.location.reload();
        // setFormSuccess(res.data.message);
    } catch (error) {
        console.log(error)
    }
  }
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
        await login(formLoginData);
        Navigate("/")
        // setFormSuccess(res.data.message);
    } catch (error) {
        console.log(error)
    }
  }

  const handleChangeRegister = (event) => {
    setFormRegisterData((prev) => ({
        ...prev, [event.target.name]:event.target.value
    }));
  }
  const handleChangeLogin = (event) => {
    setFormLoginData((prev) => ({
        ...prev, [event.target.name]:event.target.value
    }));
  }

  const handlePage = ()=>{
    if (loginPage === 'active'){
      setLogin("inactive")
    }else{
      setLogin('active')
    }
  }
  return (
    <React.Fragment>
        <div className="authPage">
            <div className="header">
                <div className="logo">
                <img src={logo} alt="Logo de devmastermind" />
                </div>
                <div className="navigation">
                <a href="#">
                    Home
                    <hr />
                </a>
                <a href="#">
                    About
                    <hr />
                </a>
                <a href="#">
                    Services
                    <hr />
                </a>
                <a href="#">
                    Contact
                    <hr />
                </a>
                <button>Login</button>
                </div>
            </div>
            <div className="form">
                    <div className={"login-form " + loginPage}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmitLogin}>
                        <div className="content">
                        <input type="email" name='email' required autoComplete='off' onChange={handleChangeLogin}/>
                        <label>Email</label>
                        <EmailIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="password" name='password' required autoComplete='off' onChange={handleChangeLogin}/>
                        <label>Password</label>
                        <LockIcon className='icon'/>
                        </div>
                        <div className='btn'>
                        <button className='login-btn' type='submit'>Login</button>
                        <span>Don't have account?</span>
                        <a href="#" onClick={handlePage} className='register-btn'>Register</a>
                        </div>
                    </form>
                    </div>
                    <div className={"register-form " + loginPage}>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmitRegister}>
                        <div className="content">
                        <input type="email" name='email' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Email</label>
                        <EmailIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="text" name='nom' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Nom</label>
                        <EmailIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="text" name='prenom' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Prenom</label>
                        <EmailIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="text" name='adresse' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Adresse</label>
                        <EmailIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="tel" name='tel' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Tel</label>
                        <EmailIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="password" name='password' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Password</label>
                        <LockIcon className='icon'/>
                        </div>
                        <div className="content">
                        <input type="password" name='confirmPassword' required autoComplete='off' onChange={handleChangeRegister}/>
                        <label>Confirm Password</label>
                        <LockIcon className='icon'/>
                        </div>
                        <div className='btn'>
                        <button className='login-btn' type='submit'>Register</button>
                        <span>Already have account?</span>.
                        <a href="#" onClick={handlePage} className='register-btn'>Login</a>
                        </div>
                    </form>
                    </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Auth;