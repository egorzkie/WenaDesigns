import {
  useEffect,
  useState,
} from 'react';
import Pay from '../Checkout/Pay'
import Header from '../Header/Header.js'
import Parse from 'parse';
import Footer from '../Footer/Footer.js'
import * as Env from '../../environments';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export const CheckoutForm = () => {
  const [items, setItems] = useState([]);

  const transformParseToObject = (parseItem) => {
    const result = ['name', 'price']
      .map((prop) => [prop, parseItem.get(prop)]);
      
    result.id = parseItem.id;
    return Object.fromEntries(result);
  };

  const fetchItems = async () => {
    const results = await (new Parse.Query('shoppingCart').findAll());

    return results.map(transformParseToObject);
  };

  useEffect(() => {
    fetchItems().then((_items) => setItems(_items));
  }, []);

  return (
    <div>
    <Header />
    {/* { items.map(({ name, price, id }) => (
        <Pay
          key={id}
          {...{ name, price, id }}
        />
      )) } */}
    <Pay />
    <div className="footer-gap"></div>
    <Footer />
    </div>
  );
};
// import React from "react";
// import { parse as Parse} from '../Auth/AuthService';
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useNavigate } from "react-router-dom";
// import Header from '../Header/Header.js'
// import Footer from '../Footer/Footer.js'

// // where does it get this name from 
// export const CheckoutForm = ({ name, price }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   let navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { error } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//         alert("Payment success! Thank you!");
//         navigate('../');
//       // needs to delete items in cart... items go to order component?
//       //send token to backend here
//     } else {
//       alert("Payment unsuccessful. Try again.");
//     }

//   return (
//     <div>
//       <Header />
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
//       <CardElement />
//       <button>Pay</button>
//     </form>
//     <div className="footer-gap"></div>
//     <Footer />
//     </div>
//   );
//   }
// };
