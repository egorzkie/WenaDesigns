import React, { useState, useEffect } from 'react';
import {userLogin} from '../Auth/AuthService';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
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
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={newUser.email}
            onChange={onChange}
            name="email"
            required
          />
        </div>
        {' '}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={newUser.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Login
          </button>
        </div>
      </form>
      <p>Don't have an account?</p>
      <Link to="/AuthRegister">
          Register
      </Link>
    </div>
  );
}

export default LoginForm;
