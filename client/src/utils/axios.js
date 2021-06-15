import axios from "axios";

// Add a request interceptor for example to log the user out when his/her token was tampered out maliciously during their navigation and upon a page refresh a 401 is displayed even though they logged in legitimately

//below handle a request before sent to then/catch, here it sends the x-access-token

// could not work out the response back to address an impromptu 401

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