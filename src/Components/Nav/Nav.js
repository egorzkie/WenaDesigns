import { Link, useNavigate } from 'react-router-dom';
import Parse from "parse";
import {doUserLogOut} from '../Auth/AuthService';

function Nav() {

  return (
    // nav bar
    <nav className="[ flex justify-around ] [  w-100 pl-20 pr-20 pt-3 pb-3  ] ">

      <ul className="nav_links [ ] [  ]">
        <Link className="[  ] [ pl-4 pr-4 ]" to="/home">Home</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/ShopAll">Shop All</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/More">More</Link>

      </ul>
      
    </nav>
  );
}

export default Nav;
