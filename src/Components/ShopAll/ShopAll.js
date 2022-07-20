import {
  useEffect,
  useState,
} from 'react';

import Parse from 'parse';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

// In a React Native application
import ItemCard from '../ItemCard/ItemCard';
import * as Env from './environments';

/** @typedef  {{price:number,name:string} } Item  */

// You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function ShopAll() {
  const [items, setItems] = useState([]);

  /** @type {Item} */
  const transformParseToObject = (parseItem) => {
    const result = ['name', 'price', 'path']
      .map((prop) => [prop, parseItem.get(prop)]);

    result.id = parseItem.id;
    return Object.fromEntries(result);
  };

  /** @return {Promise<Item[]>} */
  const fetchItems = async () => {
    const results = await (new Parse.Query('products').findAll());

    return results.map(transformParseToObject);
  };

  useEffect(() => {
    fetchItems().then((_items) => setItems(_items));
  }, []);

  return (
    <div className="items_list"
    >
      <Header />
      { items.map(({ name, price, id, path }) => (
        <ItemCard
          key={id}
          {...{ name, price, id, path }}
        />
      )) }
      <div className="footer-gap" key="footer"></div>
      <Footer />
    </div>
  );
}

export default ShopAll;
