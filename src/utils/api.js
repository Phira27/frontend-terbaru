import axios from "axios";

export const api = axios.create({
  url: "http://localhost:3000/hydra",
  headers: {
    "Content-Type": "application/json",
  },
});
