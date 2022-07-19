import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import './Order.css'
import { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import { getCurrentUser } from '../Auth/AuthService.js';
  
  function Order() {

    // if payment successful
    // delete items from cart
    // add items to order 

    return (
      <div>
        <Header />
        <div className="footer-gap"></div>
        <Footer />
      </div>
    );
  }
  
  export default Order;
  