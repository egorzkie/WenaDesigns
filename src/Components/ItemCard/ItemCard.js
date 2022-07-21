import PropTypes from 'prop-types';
import './ItemCard.css';
import { parse as Parse} from '../Auth/AuthService';
import { Link } from 'react-router-dom';

export const AddCart = ({ name, price }) => {
  return <button className="addToCartBtn" onClick={async() => {
    const user = Parse.User.current()
    const userEmail = user.getEmail()
    const shoppingCart = new Parse.Object('shoppingCart')
    shoppingCart.set('name', name)
    shoppingCart.set('email', userEmail)
    shoppingCart.set('price', price)
    await shoppingCart.save()
    alert(
      `added to cart!!`,
    );
  }}>Add to cart</button>
}
function ItemCard({ name, price, path }) {
  return (
    // <div className="card [  flex-row ] [ bg-white p-4 shadow-sm h-200 w-10 ]">
    <div className="card">
      <div>
      {/* make dynamic */}
        <Link to={`/Display?name=${name}`}>
          <img className="product-image" src={path} alt="" />
          <div className="name">
          <figcaption>{ name ?? 'Product name'}</figcaption>
          </div>
          <div className="price">
          <span className="item_price">${price ?? 'N/A'}</span>
          </div>
        </Link>
      </div>
      {/* <AddCart name={name} price={price} /> */}
    </div>
  );
}

ItemCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ItemCard;
