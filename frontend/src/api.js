import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
});

export const createUser = (data) => API.post("/users", data);
export const getUsers = () => API.get("/users");
