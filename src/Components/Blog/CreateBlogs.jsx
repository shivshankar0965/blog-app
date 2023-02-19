import React, { useState } from "react";
import "./blog.css";
import { Link, useNavigate } from "react-router-dom";
import { createBlogs } from "../../services/services";
const CreateBlogs = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: "",
    body: "",
  });
  const handleCreate = (blog) => {
    createBlogs(token, blog)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          navigate("/blogs");
        }
      })
      .catch((err) => {
        alert("can't creat the blog");
      });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const { title, blog } = blogData;
  return (
    <div className="app__create-blog">
      <div className="app__blogs-heading">
        <h2 className="app__blog-heading">Create Blogs</h2>
        <button onClick={() => navigate("/blogs")} className="blogs_btns">
          Go Back to Blogs
        </button>
      </div>
      <div className="app__blog-container">
        <div className="app__blog-form-control">
          <div className="app__input-control">
            <input
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Enter Blog Title..."
            />
          </div>
          <div className="app__input-control">
            <textarea
              name="body"
              value={blog}
              onChange={handleChange}
              placeholder="Enter Blog body..."
            />
          </div>

          <div className="app__form-control-footer">
            <button
              className="app__blog-btn"
              onClick={() => handleCreate(blogData)}
            >
              Create Blog
            </button>
            <p>
              Already added a blog ?{" "}
              <span>
                <Link to="/blogs">Blogs</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;
