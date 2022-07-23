import './Main.scss';
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

        <div id="container">
          {/* <Link to="/ShopAll"> */}
          <div class="button" id="button-3">
          <div id="circle"></div>
          <a href="/ShopAll" className="Shop">SHOP</a>
          </div>
          {/* </Link> */}
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
