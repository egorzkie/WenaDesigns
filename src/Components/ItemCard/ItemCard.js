import PropTypes from 'prop-types';
import './ItemCard.css';

function ItemCard({ name, price, image }) {
  return (
    <div className="card [  flex-col ] [ bg-white p-4 shadow-sm h-200 w-10 ]">
      {/* <img src={path} alt="" className="item_img" /> */}
      <figcaption>{ name ?? 'Product image'}</figcaption>

      <span className="item_price">{price ?? 'N/A'}</span>

    </div>
  );
}

ItemCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ItemCard;
