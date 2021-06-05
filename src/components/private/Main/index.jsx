import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useTweets from './../../../hooks/useTweets';
import Timeline from './Timeline';
import NewTweet from './NewTweet';

const Main = () => {
  const { tweets, isLoading, addTweet, removeTweet } = useTweets();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <NewTweet addTweet={addTweet} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Typography variant="h4">Latest Tweets</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          <Timeline
            tweets={tweets}
            isLoading={isLoading}
            removeTweet={removeTweet}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
