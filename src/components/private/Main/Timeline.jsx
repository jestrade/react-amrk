import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const Timeline = ({ items, isLoading, removeTweet }) => {
  return isLoading ? (
    <p>loading ...</p>
  ) : items.length > 0 ? (
    <List>
      {items.map(({ _id, content, createdAt, user }) => (
        <ListItem key={_id}>
          <ListItemText
            primary={`${user.name} says: <br /> ${content}`}
            secondary={createdAt}
          />
          <Button
            color="primary"
            onClick={() => {
              removeTweet(_id);
            }}
            type="button"
            variant="contained"
          >
            remove
          </Button>
        </ListItem>
      ))}
    </List>
  ) : (
    <p>no data</p>
  );
};

export default Timeline;
