import Parse from "parse";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import ProfileCheck from './ProfileCheck.js';

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
        <p>Edit your profile...{" "}</p>
        {/* Move cart to shopping cart page */}
        {currentUser ? <ProfileCheck /> : null}
        <div className="footer-gap"></div>
        <Footer />
    </div>
    );
}

export default ProfileGood;