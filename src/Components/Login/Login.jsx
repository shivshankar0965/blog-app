import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../../services/services";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (user) => {
    loginService(user).then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.token) {
        navigate("/blogs");
      }
    });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const { email, password } = userData;
  return (
    <div className="app__login">
      <div className="app__login-container">
        <div className="app__login-header">
          <h2>Login</h2>
        </div>
        <div className="app__login-form-control">
          <div className="app__input-control">
            <input
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your Email..."
            />
          </div>
          <div className="app__input-control">
            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password..."
            />
          </div>
          <div className="app__form-control-footer">
            <button
              className="app__login-btn"
              onClick={() => handleLogin(userData)}
            >
              Login
            </button>
            <p>
              Don't have an account ?{" "}
              <span>
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
