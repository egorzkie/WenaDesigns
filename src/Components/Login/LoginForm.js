import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ user, onChange, onSubmit }) {
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
            value={user.email}
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
            value={user.password}
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
