import axios from "axios";
import auth from "./authService";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    Authorization: `Bearer ${auth.getAuthToken()}`,
  },
});

export default axiosInstance;
