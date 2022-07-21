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

function CheckoutForm() {
  // const [items, setItems] = useState([]);

  // const transformParseToObject = (parseItem) => {
  //   const result = ['name', 'price']
  //     .map((prop) => [prop, parseItem.get(prop)]);
      
  //   result.id = parseItem.id;
  //   return Object.fromEntries(result);
  // };

  // const fetchItems = async () => {
  //   const results = await (new Parse.Query('shoppingCart').findAll());

  //   return results.map(transformParseToObject);
  // };

  // useEffect(() => {
  //   fetchItems().then((_items) => setItems(_items));
  // }, []);

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

export default CheckoutForm;