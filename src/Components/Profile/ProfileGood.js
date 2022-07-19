import Parse from "parse";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import ProfileCheck from './ProfileCheck.js';
import './Profile.css';

function ProfileGood() {
  
    // moved cart stuff

    // const navigate = useNavigate();
    var currentUser = Parse.User.current();

    // if (currentUser !== null) {
    //     var check = 
    // }
    // Temporary
    // Add more functionality such as change username, password, etc. 
    return (
        <div>
            <Header />
        <p style={{ textAlign: 'center', margin: 20, borderBottom: '1px solid black', padding: 20 }}>Your Account{" "}</p>
        {/* Move cart to shopping cart page */}
        {currentUser ? <ProfileCheck /> : null}
        <div className="footer-gap"></div>
        <Footer />
    </div>
    );
}

export default ProfileGood;