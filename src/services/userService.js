import routes from './routes';
import * as http from './http';

const { LOGIN, LOGOUT, SIGNUP } = routes;

const login = (user) => {
  return http.post(LOGIN, user);
};

const logout = (user) => {
  return http.get(LOGOUT, user);
};

const signup = (user) => {
  return http.post(SIGNUP, user);
};

export { login, logout, signup };
