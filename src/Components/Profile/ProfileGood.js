import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Parse from "parse";

function ProfileGood() {
    const [cart, setCart] = useState('empty')
    const { firstname, lastname } = useParams();
    useEffect(() => {
        getCurrentUser().then((user) => {
            // const user = data.find(d => d.name === 'OwnUbrM8nc')
            const productName = user.get('cart')
            setCart(productName)
        })
    })
    // Temporary
    // Add more functionality such as change username, password, etc. 
    return <div>
        <p>Edit your profile...{" "}</p>
        {cart}
    </div>
}


const getCurrentUser = async() => {
    const currentUser = await Parse.User.current();
    const userid = currentUser.id
    // const userid = 'OwnUbrM8nc'
    const results = await (new Parse.Query('User').findAll());
    return results.find(res => res.id === userid)
}
export default ProfileGood;