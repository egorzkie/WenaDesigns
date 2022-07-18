import PropTypes from 'prop-types';
import './Product.css';
import { parse as Parse} from '../Auth/AuthService';

function ProductPage({ name, price, path }) {
  return (
    <div>
      {/* make dynamic */}
      <p> Hi </p>
      <img className="product-image" src={path} alt="" />
      <figcaption>{ name ?? 'Product name'}</figcaption>
      <span className="item_price">${price ?? 'N/A'}</span>
      <button onClick={async() => {
        const user = Parse.User.current()
        const userEmail = user.getEmail()
        const shoppingCart = new Parse.Object('shoppingCart')
        shoppingCart.set('name', name)
        shoppingCart.set('email', userEmail)
        shoppingCart.set('price', price)
        await shoppingCart.save()
      }}>Add to cart</button>
    </div>
  );
}

ProductPage.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductPage;