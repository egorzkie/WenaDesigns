import shoppingcart from './Images/checkout.svg';
import logo from './Images/logo.png';
import './Main.css';

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
function MainModule() {
  return (
    <div className="canvas">
      <div className="header">

        {/* <!--example banner--> */}
        <p className="banner">
          FREE US Shipping on orders $50+ using code FREESHIP50
        </p>
        <a href="checkout/index.html">
          <img
            src={shoppingcart}
            alt="Checkout"
            className="checkout_icon"
          />
        </a>
        <img
          src={logo}
          alt="Wena Designs"
          className="logo"
        />
        <h3 className="description"> laser cut goods + engraving </h3>

      </div>
    </div>
  );
}

export default MainModule;
