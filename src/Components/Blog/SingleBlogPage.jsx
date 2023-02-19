import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog } from "../../services/services";
const SingleBlogPage = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getSingleBlog(token, id)
      .then((res) => {
        let [singleBlog] = res.data;
        setBlog(singleBlog);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  }, []);
  return (
    <div className="app__blogs">
      <div className="app__blogs-heading">
        <h2 className="app__blog-heading">Blogs</h2>
        <button onClick={() => navigate("/blogs/")} className="blogs_btns">
          Go Back to Blogs
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="app__blogs-container">
          <div className="app__blogs-item" key={blog._id}>
            <h3 className="app__blogs-item-heading">{blog.title}</h3>
            <p className="app__blogs-item-body">{blog.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogPage;
