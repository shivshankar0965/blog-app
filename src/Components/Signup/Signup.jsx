import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerService } from "../../services/services";
import "./signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const handleRegister = (user) => {
    registerService(user).then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
        navigate("/login");
      }
    });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "age") {
      Number(value);
    }
    setUserData({
      ...userData,
      [name]: name === "age" ? parseInt(value) : value,
    });
  };

  const { email, password, name, age } = userData;
  return (
    <div className="app__login">
      <div className="app__login-container">
        <div className="app__login-header">
          <h2>Register</h2>
        </div>
        <div className="app__login-form-control">
          <div className="app__input-control">
            <input
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your Name..."
            />
          </div>
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
          <div className="app__input-control">
            <input
              name="age"
              value={age}
              onChange={handleChange}
              type="number"
              placeholder="Enter your age..."
            />
          </div>
          <div className="app__form-control-footer">
            <button
              className="app__login-btn"
              onClick={() => handleRegister(userData)}
            >
              Register
            </button>
            <p>
              Already have an account ?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
