import { Link, useNavigate } from 'react-router-dom';
import './TopRight.css';
import Parse from "parse";
import shoppingcart from './Images/shopping.png'
import profile from './Images/profile.png'

function TopRight() {
  const navigate = useNavigate();
  var currentUser = Parse.User.current();

  // check if user is already login or not
  // if is show log out
  if (currentUser !== null) {
    // var check = <button onClick={() => doUserLogOut({navigate})} className="auth"
    // >Log Out
    // </button>
    var check = <Link to="/profile" className="profile">
      <img
            src={profile}
            alt="Checkout"
            className="checkout_icon"
      />
    </Link>;
      // do stuff with the user
  } else {
      // if not show log in
    check = <Link to="/login" className="profile">
      <img
            src={profile}
            alt="Checkout"
            className="checkout_icon"
      />
    </Link>;
  } 

  return (
      <div>
      {/* Moved register to log in/profile  */}
      {/* Need to change href */}
      <Link to="/cart">
          <img
            src={shoppingcart}
            alt="Checkout"
            className="checkout_icon"
          />
        </Link>
      {check}
      </div>

  );
}

export default TopRight;