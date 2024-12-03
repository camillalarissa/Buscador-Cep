import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/", // Replace with your API endpoint
});

export default api;
