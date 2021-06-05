import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const Items = ({ items, isLoading, removeItem }) => {
  return isLoading ? (
    <p>loading ...</p>
  ) : items.length > 0 ? (
    <List>
      {items.map(({ _id, content, createdAt }) => (
        <ListItem key={_id}>
          <ListItemText primary={content} secondary={createdAt} />
          <Button
            color="primary"
            onClick={() => {
              removeItem(_id);
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

export default Items;
