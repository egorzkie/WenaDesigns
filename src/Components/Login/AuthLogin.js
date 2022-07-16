import { parse as Parse} from '../Auth/AuthService';
import LoginForm from "./LoginForm";
// 'useHistory' is not exported from 'react-router-dom'.
// 参考： https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import ProtectedRoute from '../../Common/AppTools/ProtectedRoute';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

function AuthLogin() {

  return (
    <div>
      <Header />
      <ProtectedRoute component={() => <LoginForm
      />} currentUser={!Parse.User.current()} path='/home' />
      <div className="footer-gap"></div>
      <Footer />
    </div>
  );
}

export default AuthLogin;