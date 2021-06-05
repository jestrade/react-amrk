import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as userService from './../../../services/userService';

const Header = ({ isAuth, logout, user }) => {
  const history = useHistory();

  const endSession = () => {
    logout(null);
    userService.logout();
    history.push('/login');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      <nav>
        {isAuth ? (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">To do</Link>
            </li>
            <li>Welcome, {user?.name}</li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  endSession();
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        ) : (
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
        )}
      </nav>
    </>
  );
};

export default Header;
