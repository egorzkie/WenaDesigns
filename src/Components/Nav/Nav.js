import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  return (
    // nav bar
    <nav className="[ flex justify-around ] [  w-100 pl-20 pr-20 pt-3 pb-3  ] ">

    <div className="nav">
      <ul className="nav_links [ ] [  ]">
        <Link className="[  ] [ pl-4 pr-4 ]" to="/home">Home</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/ShopAll">Shop All</Link>
        <Link className="[  ] [ pl-4 pr-4 ]" to="/Shipping">Shipping</Link>
      </ul>
    </div>
      
    </nav>
  );
}

export default Nav;
