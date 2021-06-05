import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from './../../../contexts/AuthContext';
import * as userService from './../../../services/userService';

const Header = () => {
  const auth = useContext(AuthContext);
  const { user } = auth;
  const history = useHistory();

  const logout = () => {
    userService
      .logout() //
      .then(() => {
        auth.logout();
        history.push('/');
      });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Twitter</Typography>
        </Toolbar>
      </AppBar>
      {auth.checkAuth() ? (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">To Do</Link>
            </li>
            <li>welcome, {user.name}</li>
            <li>
              <Button
                type="button"
                variant="outlined"
                size="small"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
