import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// request interceptor
const token = "asjdlfkjasdlkfjasdf";

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    //server open
    if (err.response) {
      err.message = `Error from server: status: ${err.response.status} - message: ${err.response.statusText}`;
    }

    return Promise.reject(err);
  },
);

export default api;
