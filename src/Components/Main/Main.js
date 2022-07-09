import './Main.css';
import Header from '../Header/Header.js'
import { Divider } from 'antd';

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
function MainModule() {
  return (
    <div>
        <Header />
        {/* <div>
        <button className="shopButton">SHOP</button>
        </div> */}
        <h2>Featured items...</h2>
    </div>
  );
}

export default MainModule;
