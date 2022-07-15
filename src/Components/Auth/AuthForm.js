import React from "react";

const AuthForm = ({ user, onChange, onSubmit }) => {
  return (
    <div>
      <div className="form-canvas">
      <h3 className="login-title">REGISTER</h3>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <label>first name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="FIRST NAME"
            required
          />
        </div>
        <div className="form-group">
          <label>last name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="LAST NAME"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="EMAIL"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            placeholder="PASSWORD"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AuthForm;
