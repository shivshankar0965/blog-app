import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CreateBlogs from "./Components/Blog/CreateBlogs";
import UPdateBlogs from "./Components/Blog/UpdateBlogs";
import SingleBlogPage from "./Components/Blog/SingleBlogPage";
import RequireAuth from "./PrivateRoute/RequireAuth";

function App() {
  return (
    <div className="blog_app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/blogs"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs/:id" element={<SingleBlogPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/blogs/create" element={<CreateBlogs />} />
        <Route path="/blogs/update/:id" element={<UPdateBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
