import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormSignUp from './FormSignUp';
import * as userService from './../../../services/userService';

const SignUp = () => {
  const history = useHistory();

  const createUser = (user) => {
    userService
      .signup(user)
      .then((response) => {
        console.log(response);
        history.push('/login');
      })
      .catch(() => {
        console.log('error while creating the user');
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Typography variant="h4">SignUp</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <FormSignUp createUser={createUser} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
