import PropTypes from 'prop-types';
import './ItemCard.css';
import { parse as Parse} from '../Auth/AuthService';

function ItemCard({ name, price }) {
  return (
    <div className="card [  flex-col ] [ bg-white p-4 shadow-sm h-200 w-10 ]">
      {/* <img src={path} alt="" className="item_img" /> */}
      <figcaption>{ name ?? 'Product image'}</figcaption>

      <span className="item_price">{price ?? 'N/A'}</span>
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

ItemCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ItemCard;
