import './Cart.css'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import React, { useEffect, useState } from 'react';
import Parse from "parse";
import CartItem from './CartItem';

function Cart() {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        getCurrentUser().then(async(user) => {
            // const user = data.find(d => d.name === 'OwnUbrM8nc')
            // const productName = user.get('cart')
            const userEmail = user.getEmail()
            const query = new Parse.Query('shoppingCart')
            const results = await query.findAll()
            const result = results.filter((res) => {
                return res.get('email') === userEmail
            })

            let totalPrice = 0
            const cart = result.map(res => {
                const price = res.get('price')
                totalPrice += Number(price)
                return {
                    origin: res,
                    price,
                    name: res.get('name')
                }
            })
            setTotalPrice(totalPrice)
            setCart(cart)
        })
    })

return (   
    <div>
        <Header />
    <p> put cart stuff here.. </p>
    {cart.map((item, index) => <CartItem key={index} data={item} />)}
    <p>totalPrice:{totalPrice}</p>
    <div className="footer-gap"></div>
    <Footer />
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