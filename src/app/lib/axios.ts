// src/lib/axios.ts
import axios from "axios";

const baseURL =
  typeof window !== "undefined"
    ? "" // On the client, relative URL is fine
    : process.env.NEXTAUTH_URL || "http://localhost:3000"; // On the server, use full URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;


