import './Cart.css'
import Header from '../Header/Header.js'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Parse from "parse";

function Cart() {

    const [cart, setCart] = useState('empty')
    useEffect(() => {
        getCurrentUser().then((user) => {
            // const user = data.find(d => d.name === 'OwnUbrM8nc')
            const productName = user.get('cart')
            setCart(productName)
        })
    })

return (   
    <div>
        <Header />
    <p> put cart stuff here.. </p>
    {cart}
    </div>
);
}

const getCurrentUser = async() => {
    const currentUser = await Parse.User.current();
    const userid = currentUser.id
    // const userid = 'OwnUbrM8nc'
    const results = await (new Parse.Query('User').findAll());
    return results.find(res => res.id === userid)
}

export default Cart;