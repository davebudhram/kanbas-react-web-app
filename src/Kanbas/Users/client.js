import axios from "axios";
const BASE_API = process.env.REACT_APP_API_BASE || 'https://kanbas-node-server-app-rmdp.onrender.com/api';
const URL = `${BASE_API}/users`;

const request = axios.create({
  withCredentials: true,
});

/**
 * Sign up a new user with the given credientials
 * @param {*} credentials 
 * @returns 
 */
export const signin = async (credentials) => {
  const response = await request.post(`${URL}/signin`, credentials);
  return response.data;
};

/**
 * Adds a new user to the database
 * @returns 
 */
export const account = async () => {
  const response = await request.post(`${URL}/account`);
  return response.data;
};


export const updateUser = async (user) => {
  const response = await request.put(`${URL}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${URL}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${URL}`, user);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${URL}/${id}`);
  return response.data;
};



export const deleteUser = async (user) => {
  const response = await request.delete(
    `${URL}/${user._id}`);
  return response.data;
};


export const signup = async (credentials) => {
  const response = await request.post(
    `${URL}/signup`, credentials);
  return response.data;
};


export const signout = async () => {
  const response = await request.post(`${URL}/signout`);
  return response.data;
};
