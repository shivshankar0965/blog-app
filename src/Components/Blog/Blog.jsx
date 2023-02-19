import React, { useEffect, useState } from "react";
import { deleteBlog, getAllBlogs } from "../../services/services";
import { useNavigate } from "react-router-dom";
import "./blog.css";
const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    setLoading(true);
    getAllBlogs(token)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  }, [token]);
  const handleUpdate = (id) => {
    navigate(`/blogs/update/${id}`);
  };
  const handleOpen = (id) => {
    navigate(`/blogs/${id}`);
  };
  const handleDelete = (id) => {
    deleteBlog(id, token).then((res) => {
      alert(res.data.message);
      setLoading(true);
      getAllBlogs(token).then((res) => {
        setBlogs(res.data);
        setLoading(false);
      });
    });
  };
  if (loading) return <div>Loading...</div>;
  return (
    <div className="app__blogs">
      <div className="app__blogs-heading">
        <h2 className="app__blog-heading">Blogs</h2>
        <button
          onClick={() => navigate("/blogs/create")}
          className="blogs_btns"
        >
          Create Blogs
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : blogs.length >= 0 ? (
        <div className="app__blogs-container">
          {blogs?.map((blog) => {
            return (
              <div className="app__blogs-item" key={blog._id}>
                <h3 className="app__blogs-item-heading">{blog.title}</h3>
                <p className="app__blogs-item-body">{blog.body}</p>
                <div className="app__blogs-item-btns">
                  <button
                    onClick={() => handleOpen(blog._id)}
                    className="app__blogs-open blogs_btns"
                  >
                    Open
                  </button>
                  <button
                    onClick={() => handleUpdate(blog._id)}
                    className="app__blogs-edit blogs_btns"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="app__blogs-delete blogs_btns"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>fetch again</div>
      )}
    </div>
  );
};

export default Blog;
