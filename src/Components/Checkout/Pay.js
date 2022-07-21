  import PropTypes from 'prop-types';
  import { parse as Parse} from '../Auth/AuthService';
  import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
  import { useNavigate } from "react-router-dom";
  import axios from 'axios';
  
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
  
      if (!error) {
        console.log("Stripe | token generated!", paymentMethod);
        try {
          const { id } = paymentMethod;
          const response = await axios.post(
            "http://localhost:8080/stripe/charge",
            {
              amount: 999,
              id: id,
            }
          );
  
          console.log("Stripe | data", response.data.success);
          if (response.data.success) {
            console.log("payment successful!");
            alert("Payment successful! Thank you for ordering!");
            navigate('../');
            // getOrder();
          }
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
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button>
      Pay</button>
    </form>
    </div>
    );
  }

  Pay.propTypes = {
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  
  export default Pay;
