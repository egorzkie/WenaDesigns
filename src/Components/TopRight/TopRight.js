import { Link, useNavigate } from 'react-router-dom';
import Parse from "parse";
import shoppingcart from './Images/shopping.png'
import {doUserLogOut} from '../Auth/AuthService';

function TopRight() {
  const navigate = useNavigate();
  var currentUser = Parse.User.current();

  // check if user is already login or not
  // if is show log out
  if (currentUser !== null) {
    var check = <button onClick={() => doUserLogOut({navigate})}>Log out</button>
      // do stuff with the user
  } else {
      // if not show log in
    check = <Link to="/login">
    Login
    </Link>;
  } 

  return (
      <div>
        {/* Moved register to log in  */}
        
      {check}
      <a href="checkout/index.html">
          <img
            src={shoppingcart}
            alt="Checkout"
            className="checkout_icon"
          />
        </a>
      </div>

  );
}

export default TopRight;