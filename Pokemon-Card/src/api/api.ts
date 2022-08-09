import axios from "axios";

export const api = axios.create({
  
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

type Method = "get" | "post" | "put" | "delete";

export const driver = async <T>(url: string, method: Method = "get") => {
  return await api[method]<T>(url);
}