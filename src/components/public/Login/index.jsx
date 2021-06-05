import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './../../../contexts/AuthContext';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLogin from './FormLogin';
import * as userService from './../../../services/userService';

const Login = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const login = (user) => {
    userService
      .login(user) //
      .then((response) => {
        if (response.data.message === 'ok') {
          auth.login(response.data.data);
          history.push('/');
        } else {
          console.log(response.data.message);
        }
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Typography variant="h4">Login</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <FormLogin login={login} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
