  import PropTypes from 'prop-types';
  // import { parse as Parse} from '../Auth/AuthService';
  import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
  import { useNavigate } from "react-router-dom";
  import axios from 'axios';
  import './Checkout.css'
  
  function Pay({ name, price }) {

    const stripe = useStripe();
    const elements = useElements();
    let navigate = useNavigate();

    // const getOrder = async() => {
    //     const user = Parse.User.current()
    //     const userEmail = user.getEmail()
    //     const orders = new Parse.Object('orders')
    //     orders.set('name', name)
    //     orders.set('email', userEmail)
    //     orders.set('price', price)
    //     await orders.save()
    // }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
  
      // payment is processed 
      if (!error) {
        console.log("Token generated!", paymentMethod);
        alert("Payment successful! Thank you for ordering!");
        navigate('../');
        try {
          const { id } = paymentMethod;
          const response = await axios.post(
            "http://localhost:8080/stripe/charge",
            {
              amount: 100,
              id: id,
            }
          );
  
          console.log("Stripe | data", response.data.success);
          if (response.data.success) {
            console.log("payment successful!");
            // getOrder();
          }
        // payment is not processed
        } catch (error) {
          console.log(error.message);
          alert("Payment unsuccessful. Please try again.");
        }
      } else {
        console.log(error.message);
        alert("Payment unsuccessful. Please try again.");
      }
    };

    return (
      <div>
      <div className="space"></div>
      <div className="checkout">
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button className="payBtn">
      Pay</button>
    </form>
    </div>
    </div>
    );
  }

  Pay.propTypes = {
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  
  export default Pay;
