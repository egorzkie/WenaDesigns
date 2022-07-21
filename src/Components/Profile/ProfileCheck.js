import React,  { useState } from 'react'
import {doUserLogOut} from '../Auth/AuthService';
import { useNavigate } from "react-router-dom";
import LoginForm from '../Login/LoginForm';
import '../Login/Login.css'

const ProfileCheck = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    return <>
    <div className="ProfileBtn"> 
    <div className="PassBtn"> 
    <button type="submit" onClick={() => setShow(true)}>Change Password</button>
    </div>
    <div className="LogOutBtn"> 
    <button type="submit" onClick={() => doUserLogOut({navigate})}>
        Log Out
    </button>
    </div>
    </div>
    {show ? <LoginForm changePassword={true} /> : null}
    {/* <div className="orderBtn">
    <button type="submit">
      <Link to="/Orders" className="order-button">
          See Orders
      </Link>
      </button>
      </div> */}
</>
}

export default ProfileCheck