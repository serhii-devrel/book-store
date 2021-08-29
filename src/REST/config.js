// Core
import axios from "axios";

export const baseURL = "https://612a4d54068adf001789babd.mockapi.io/api";

// Client init
export const RESTClient = axios.create({
  baseURL,
});
