import axios from "axios";

const api = axios.create({
    baseURL: "https://coichet-backend.onrender.com/api/",
    timeout: 3000,
    headers: (localStorage.authorization) ? { authorization: localStorage.authorization } : ""
})

export { api }