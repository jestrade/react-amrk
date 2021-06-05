import routes from './routes';
import * as http from './http';

const { LOGIN, SIGNUP, LOGOUT } = routes;

const login = (user) => {
  return http.post(LOGIN, user);
};

const signup = (user) => {
  return http.post(SIGNUP, user);
};

const logout = () => {
  return http.get(LOGOUT);
};

export { login, logout, signup };
