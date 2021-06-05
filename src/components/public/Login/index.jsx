import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLogin from './FormLogin';
import * as userService from './../../../services/userService';

const Login = ({ login }) => {
  const history = useHistory();

  const loginUser = (user) => {
    userService
      .login(user)
      .then((response) => {
        if (response.data.message === 'ok') {
          login(response.data.data);
          history.push('/');
        } else {
          console.log('invalid credentials');
        }
      })
      .catch(() => {
        console.log('error while login');
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
          <FormLogin loginUser={loginUser} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
