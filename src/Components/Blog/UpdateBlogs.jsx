import React, { useEffect, useState } from "react";
import "./blog.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleBlog, updateBlogs } from "../../services/services";
const UPdateBlogs = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const params = useParams();
  const [blogBody, setBlogBody] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  useEffect(() => {
    getSingleBlog(token, params.id).then((res) => {
      const [singleBlog] = res.data;
      setBlogBody(singleBlog.body);
      setBlogTitle(singleBlog.title);
    });
  }, [params.id]);
  const handleUpdate = (id, payload) => {
    updateBlogs(token, payload, id).then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
        navigate("/blogs");
      }
    });
  };

  return (
    <div className="app__create-blog">
      <div className="app__blogs-heading">
        <h2 className="app__blog-heading">Update Blogs</h2>
        <button onClick={() => navigate("/blogs")} className="blogs_btns">
          Go Back to Blogs
        </button>
      </div>
      <div className="app__blog-container">
        <div className="app__blog-form-control">
          <div className="app__input-control">
            <input
              name="title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="Enter Blog Title..."
            />
          </div>
          <div className="app__input-control">
            <textarea
              name="body"
              value={blogBody}
              onChange={(e) => setBlogBody(e.target.value)}
              placeholder="Enter Blog body..."
            />
          </div>

          <div className="app__form-control-footer">
            <button
              className="app__blog-btn"
              onClick={() =>
                handleUpdate(params.id, {
                  title: blogTitle,
                  body: blogBody,
                })
              }
            >
              Update Blog
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

export default UPdateBlogs;
