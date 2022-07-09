import { Link, useNavigate } from 'react-router-dom';
import Parse from "parse";
import {doUserLogOut} from '../Auth/AuthService';

function Nav() {
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
     login
    </Link>;
  } 

  return (
    // nav bar
    <nav className="[ flex justify-around ] [  w-100 pl-20 pr-20 pt-3 pb-3  ] ">
      <span className="nav_logo">WenaDesigns</span>

      <ul className="nav_links [ ] [  ]">
        <Link className="[  ] [ pl-4 pr-4 ]" to="/home">Home</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/ShopAll">Shop All</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/More">More</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/Profile">Profile</Link>

      </ul>

      <span className="nav_right">
        <Link to="/AuthRegister">
          Register
        </Link>
        
      {check}
      </span>
      
    </nav>
  );
}

export default Nav;
