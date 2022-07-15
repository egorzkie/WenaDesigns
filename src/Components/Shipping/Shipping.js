import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import './Shipping.css';

function Shipping() {
    // Clean up?
    return <div>
    <Header />
    <h2 className="shipping-title">SHIPPING POLICY</h2>
    <h3 className="subtitle">ALREADY MADE ITEMS:</h3>
    <ul>
        <li className="shipping-point">
        Once your order is placed it could take up to 7 business days to ship (unless otherwise stated in the actual product listing so please read all information carefully)
        </li>
    </ul>
    <h3 className="subtitle">MADE TO ORDER ITEMS</h3>
    <ul>
        <li className="shipping-point">
        Since these are created after we receive your payment these will take longer to ship. The average turnaround time is about 3-4 weeks to ship. Again please refer to your particular product listing.
        </li>
    </ul>
    <h3 className="subtitle">GENERAL SHIPPING INFO</h3>
    <ul>
        <li className="shipping-point">
        You are responsible for supplying us with the correct shipping address. If we ship to the address you supplied and it was an error on your part then we are not responsible for this error. Shipping fees and/or the item will not be refunded. Please be aware that I’m not responsible for any lost or stolen items, all orders will receive tracking number.
        </li>
        <li className="shipping-point"> 
        All items are shipped US First Class Mail or Priority with delivery confirmation and a tracking #. The travel time is usually 2-5 business days once shipped.
        </li>
        <li className="shipping-point">
        Please double check your address before checking out. If an order is sent back due to an incorrect address, you will be charged the total shipping fee to resend to the correct address.
        </li>
        <li className="shipping-point">
        If purchasing multiple items from the shop they may ship separately. Don't worry, we will cover any additional shipping fees :) 
        </li>
        <li className="shipping-point">
        Generally we can not expedite orders, please message us BEFORE you place your order if you need the item by a certain date. We will try out best to accommodate you.
        </li>
    </ul>
    <div className="footer-gap"></div>
    <Footer />
    </div>
}

export default Shipping