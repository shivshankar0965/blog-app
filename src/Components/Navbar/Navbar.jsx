import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { getAllBlogs } from "../../services/services";
const Navbar = () => {
  let token = localStorage.getItem("token");
  const [totalBlogs, setTotalBlogs] = useState(0);
  useEffect(() => {
    getAllBlogs(token)
      .then((res) => {
        setTotalBlogs(res.data.length);
      })
      .catch((err) => {
        setTotalBlogs(0);
        console.log({ error: err });
      });
  }, [totalBlogs]);

  const links = ["blogs", "about", "contact"];
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("logged out successfull");
    navigate("/login");
  };
  return (
    <div className="app__navbar">
      <div className="app__nav-left">
        <div onClick={() => navigate("/")} className="app__logo">
          Blog App
        </div>
        <div className="app__links">
          {links.map((link, idx) => (
            <div key={idx}>
              <Link to={`/${link}`}>{link}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="app__nav-right">
        <div className="app__posts-count">
          <span>Blogs: {totalBlogs}</span>
        </div>
        <div className="app__nav-profile">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
