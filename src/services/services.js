import axios from "axios";

export const loginService = async (payload) => {
  let res = await axios.post(
    process.env.REACT_APP_BASE_URL + "users/login",
    payload
  );
  return res;
};

export const registerService = async (payload) => {
  let res = await axios.post(
    process.env.REACT_APP_BASE_URL + "users/signup",
    payload
  );
  return res;
};

export const getAllBlogs = async (token) => {
  let res = await axios.get(process.env.REACT_APP_BASE_URL + "blogs", {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
export const getSingleBlog = async (token, id) => {
  let res = await axios.get(process.env.REACT_APP_BASE_URL + "blogs/" + id, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const createBlogs = async (token, payload) => {
  let res = await axios.post(
    process.env.REACT_APP_BASE_URL + "blogs/create",
    payload,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res;
};

export const updateBlogs = async (token, payload, id) => {
  const res = await axios.patch(
    process.env.REACT_APP_BASE_URL + "blogs/update/" + id,
    payload,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res;
};

export const deleteBlog = async (id, token) => {
  const res = await axios.delete(
    process.env.REACT_APP_BASE_URL + "blogs/delete/" + id,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return res;
};
