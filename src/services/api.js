import axios from "axios";

const api = axios.create({
  baseURL: "https://lmmiranda-rocket-box-api.herokuapp.com"
});

export default api;
