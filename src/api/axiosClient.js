import axios from "axios";

const baseURL = "http://localhost:8000";

export const axiosClient = axios.create({
  baseURL,
});

export const axiosClientAuth = axios.create({
  baseURL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
