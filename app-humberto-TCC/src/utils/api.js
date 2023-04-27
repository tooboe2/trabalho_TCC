import axios from "axios";

export const api = axios.create({
  //baseURL: 'http://localhost:3599/api/v1',
  baseURL: "https://api-gerencia-solicitacao-tcc.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
});
