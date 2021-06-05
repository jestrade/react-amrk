import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormSignUp from './FormSignUp';

const SignUp = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Typography variant="h4">SignUp</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <FormSignUp />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
