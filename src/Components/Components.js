import {
  BrowserRouter, Navigate, Route, Routes
} from 'react-router-dom';
import MainModule from './Main/Main';
import ShopAll from './ShopAll/ShopAll';
import AuthRegister from './Auth/AuthRegister';
import AuthLogin from "./Login/AuthLogin";
import More from './More/More';
import Profile from './Profile/ProfileHome';
import Cart from './Cart/Cart';

function Components() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainModule />} />
        <Route path="/ShopAll" element={<ShopAll />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AuthRegister" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/More" element={<More />} />
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/ProfileHome" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default Components;
