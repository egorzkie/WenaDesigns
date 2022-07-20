import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import './Order.css'
import { useEffect, useState } from 'react';
import Parse from "parse";
import OrderItem from './OrderItem';
import { getCurrentUser } from '../Auth/AuthService.js';
  
  function Order() {

    const [order, setOrder] = useState([])
    
    useEffect(() => {
        getCurrentUser().then(async(user) => {
            const userEmail = user.getEmail()
            const query = new Parse.Query('orders')
            const results = await query.findAll()
            const result = results.filter((res) => {
                return res.get('email') === userEmail
            })

            const order = result.map(res => {
                const price = res.get('price')
                const name = res.get('name')
                return {
                    origin: res,
                    price,
                    name
                }
            })
            setOrder(order)
        })

    })

    return (
      <div>
        <Header />
        <OrderItem />
        <div className="footer-gap"></div>
        <Footer />
      </div>
    );
  }
  
  export default Order;
  