import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import './Checkout.css';
import CheckoutForm from '../Checkout/CheckoutForm.js'

function Checkout() {
    return <div>
        <Header />
        <CheckoutForm />
        <div className="footer-gap"></div>
        <Footer />
    </div>
}

export default Checkout