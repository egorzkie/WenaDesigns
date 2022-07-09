import React, { useEffect, useState } from 'react';
import {userLogin, parse as Parse} from '../Auth/AuthService';
import LoginForm from "./LoginForm";
// 'useHistory' is not exported from 'react-router-dom'.
// 参考： https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '../../Common/AppTools/ProtectedRoute';

function AuthLogin() {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
  });

  // flags in the state to watch for add/remove updates
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && flag) {
      userLogin(newUser).then((loginResp) => {
        if (loginResp) {
          setFlag(true)
          // TODO: redirect user to main app
          navigate('/home?user='+newUser.email);
          // navigate('/MainGood?user='+newUser.email);
          
          alert(
            `${loginResp.get('email')}, login success!!`,
          );
        } else {
          setFlag(false);
        }
      });
    }
  }, [newUser, flag]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted: ', e.target);
    setFlag(true);
  };

  return (
    <div>
      <ProtectedRoute component={() => <LoginForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />} currentUser={!Parse.User.current()} path='/home' />
      
    </div>
  );
}

export default AuthLogin;
