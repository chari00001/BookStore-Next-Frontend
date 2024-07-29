import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 30000,
  contentType: "application/json",
});

export default api;
