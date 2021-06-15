import axios from "axios";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["x-access-token"] = localStorage.getItem("token");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

export default axios;