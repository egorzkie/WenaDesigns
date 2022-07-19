import './Cart.css'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import React, { useEffect, useState } from 'react';
import Parse from "parse";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        getCurrentUser().then(async(user) => {
            // const user = data.find(d => d.name === 'OwnUbrM8nc')
            // const productName = user.get('cart')
            const userEmail = user.getEmail()
            const query = new Parse.Query('shoppingCart')
            const query1 = new Parse.Query('products')
            const results = await query.findAll()
            const results1 = await query1.findAll()

            const result = results.filter((res) => {
                return res.get('email') === userEmail
            })
            const pathObj = {}
            results1.forEach((res) => {
                pathObj[res.get('name')] = res.get('path')
            })

            let totalPrice = 0
            const cart = result.map(res => {
                const price = res.get('price')
                const name = res.get('name')
                totalPrice += Number(price)
                return {
                    origin: res,
                    price,
                    name,
                    path: pathObj[name]
                }
            })
            setTotalPrice(totalPrice)
            setCart(cart)
        })

    })

return (   
    <div>
    <Header />
    <h2 style={{ textAlign: 'center', margin: 20, borderBottom: '1px solid black', padding: 20 }}>Shopping Cart</h2>
    {/* If cart is not empty */}
    {cart.map((item, index) => <CartItem key={index} data={item} />)}
    {totalPrice > 0 && <p style={{ textAlign: 'right', marginRight: 20 }}>Total Price: {totalPrice}</p>}
    {totalPrice > 0 && <Link to="/Checkout"><button>Checkout</button>
    </Link>}
    {/* If cart is empty */}
    {totalPrice === 0 && <h2>Your cart is empty!</h2>}
    {totalPrice === 0 && <Link to="/ShopAll"><button>Shop</button></Link>}
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