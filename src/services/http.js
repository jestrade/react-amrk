import axios from 'axios';

const api = process.env.REACT_APP_API;

const user = JSON.parse(localStorage.getItem('user'));

const get = (url) => {
  const config = {
    headers: {
      'x-access-token': user.token,
    },
  };
  return axios.get(`${api}${url}`, config);
};

const post = (url, data) => {
  const config = {
    headers: {
      'x-access-token': user.token,
    },
  };
  return axios.post(`${api}${url}`, data, config);
};

const remove = (url, data) => {
  return axios.delete(`${api}${url}`, { data });
};

export { get, post, remove };
