import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
        alert("Payment success!")
        navigate('../');
      // needs to delete items in cart... items go to order component?
      //send token to backend here
    } else {
      alert("Payment unsuccessful")
    }
  };

  return (
    <div>
      <Header />
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button>Pay</button>
    </form>
    <div className="footer-gap"></div>
    <Footer />
    </div>
  );
};