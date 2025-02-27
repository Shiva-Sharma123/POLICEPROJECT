import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginAuth = () => {
    navigate("/app/users");
  };

  return (
    <>
      <div class="wrapper">
        <form >
          <h1>Login</h1>
          <div className="input_box">
            <div className="login">Login Id</div>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="input_box">
            <div className="login">Password</div>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="Remember-forget">
            <label>
              <input type="checkbox" name="" />
              Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="btn">
            <button onClick={loginAuth} className="button" type="submit">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
