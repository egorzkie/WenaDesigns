import './Header.css';
import logo from './Images/logo.png'
import Nav from '../Nav/Nav.js'
import TopRight from '../TopRight/TopRight.js'

// banner [X]
// icons []
// logo []
// description []
// nav []

function Header() {
  return (
      <div className="canvas">
        {/* <!--example banner--> */}
        <p className="banner">
          FREE US Shipping on orders $50+ using code FREESHIP50
        </p>
        <TopRight />
        <img
          src={logo}
          alt="Wena Designs"
          className="logo"
        />
        <h3 className="description"> laser cut goods + engraving </h3>
        <Nav />
        </div>
    );
}

export default Header;
