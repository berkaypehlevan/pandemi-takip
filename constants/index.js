import axios from "axios";

export const myAxios = axios.create({
  baseURL: "https://coronavirus-19-api.herokuapp.com",
});
