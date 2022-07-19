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