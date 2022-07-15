import React, { useState, useEffect } from 'react';
import {userLogin, changePassword as ChangePassword} from '../Auth/AuthService';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function LoginForm({ changePassword }) {
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
  
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted: ', e.target);
    changePassword ? ChangePassword(newUser.password, navigate) : setFlag(true);
  };

  return (
    <div>
      <div className="form-canvas">
      <form onSubmit={onSubmit} autoComplete="off">
        {changePassword ? null : <div className="form-group">
          <label>email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={newUser.email}
            onChange={onChange}
            name="email"
            placeholder="EMAIL"
            required
          />
        </div>}
        {' '}
        <div className="form-group">
          <label>{changePassword ? 'new ' : ''}password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={newUser.password}
            onChange={onChange}
            // name={(changePassword ? 'new ' : '') + "password"}
            name={"password"}
            placeholder={(changePassword ? 'NEW ' : '') + "PASSWORD"}
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            {changePassword ? 'CONFIRM' : 'LOGIN'}
          </button>
        </div>
      </form>
      {changePassword ? null : <><p className="register-message">Don't have an account?</p>
      <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
      <Link to="/AuthRegister" className="register-button">
          REGISTER
      </Link>
      </button></>}
      </div>
    </div>
  );
}

export default LoginForm;