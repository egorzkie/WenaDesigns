import React,  { useState } from 'react'
import {doUserLogOut} from '../Auth/AuthService';
import { useParams, useNavigate } from "react-router-dom";
import LoginForm from '../Login/LoginForm';
import '../Login/Login.css'

const ProfileCheck = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    return <>
    <button onClick={() => setShow(true)}>Change Pass</button>
    <button onClick={() => doUserLogOut({navigate})}>
        Log Out
    </button>
    {show ? <LoginForm changePassword={true} /> : null}
</>
}

export default ProfileCheck