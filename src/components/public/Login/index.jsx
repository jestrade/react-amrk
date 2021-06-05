import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLogin from './FormLogin';

const Login = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Typography variant="h4">Login</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <FormLogin />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
