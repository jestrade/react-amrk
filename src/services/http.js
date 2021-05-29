import axios from 'axios';

const api = process.env.REACT_APP_API;

const get = (url, params) => {
  return axios.get(`${api}${url}`, { params });
};

const post = (url, data) => {
  return axios.post(`${api}${url}`, data);
};

const remove = (url, data) => {
  return axios.delete(`${api}${url}`, data);
};

export { get, post, remove };
