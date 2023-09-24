import React from "react";
import { FaSignInAlt } from "react-icons/fa";
const Login = () => {
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              value="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
