import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      error.message = `Server returned ${error.response.status}: ${error.response.data.message}`;
    }
    
    throw error;
  },
);

export default api;
