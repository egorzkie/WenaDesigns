import {
  BrowserRouter as Router, Navigate, Route, Routes, 
} from 'react-router-dom';
import MainModule from './Main/Main';
import ShopAll from './ShopAll/ShopAll';
import AuthRegister from './Auth/AuthRegister';
import AuthLogin from "./Login/AuthLogin";
import Shipping from './Shipping/Shipping';
import Profile from './Profile/ProfileHome';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
// import product from './Product/Product'
// import Product from './Product/Product'
import Orders from './Order/Order'
import Display from './Display/Display'

function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainModule />} />
        <Route path="/ShopAll" element={<ShopAll />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AuthRegister" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Display" element={<Display />} />
        {/* <Route path="/Product" element={<Product />} />
        <Route path="{name}" component={product} /> */}
      </Routes>
    </Router>

  );
}

export default Components;
