import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Parse from "parse";
import Header from '../Header/Header.js'
import {doUserLogOut} from '../Auth/AuthService';

function ProfileGood() {
  
    // moved cart stuff

    const navigate = useNavigate();
    var currentUser = Parse.User.current();

    if (currentUser !== null) {
        var check = <button onClick={() => doUserLogOut({navigate})}>
            Log Out
        </button>
    }
    // Temporary
    // Add more functionality such as change username, password, etc. 
    return (
        <div>
            <Header />
        <p>Edit your profile...{" "}</p>
        {/* Move cart to shopping cart page */}
        {check}
    </div>
    );
}

export default ProfileGood;