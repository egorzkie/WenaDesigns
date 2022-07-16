import './Main.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import sign1 from './Images/sign1.jpg'
import sign2 from './Images/sign2.jpg'
import sign3 from './Images/sign3.jpg'

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
function MainModule() {
  return (
    <div>
        <Header />
        <div className="shop-button">
        <Link to="/ShopAll">
        <button className="shopButton">SHOP</button>
        </Link>
        </div>
        <div className="featured">  
        <h2 className="text">CUSTOM BABY NURSERY SIGNS</h2>
        {/* TO DO: add links to dynamic web page */}
        <img
            src={sign1}
            alt="'Lavinia' Baby Nursery Sign"
            className="sign"
        />
        <img
              src={sign2}
              alt="'Julianna' Baby Nursery Sign''"
              className="sign"
        />
        <img
              src={sign3}
              alt="'Lilah' Baby Nursery Sign"
              className="sign"
        />
        </div>
        <Footer />
    </div>
  );
}

export default MainModule;
