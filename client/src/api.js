import axios from "axios";
import { getToken } from "./tokenUtils";

const setAuthHeader = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
});

export const signup = payload => axios.post(`/users/signup`, payload);
export const signin = payload => axios.post(`/users/signin`, payload);
export const getUser = userId => axios.get(`/users/${userId}`, setAuthHeader());
