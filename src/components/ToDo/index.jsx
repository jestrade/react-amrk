import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useItems from './../../hooks/useItems';
import List from './List';
import Form from './Form';

const ToDo = () => {
  const { items, isLoading, addItem, removeItem } = useItems();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">ToDo Component</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Item List</Typography>
        <List items={items} isLoading={isLoading} removeItem={removeItem} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Add Item</Typography>
        <Form addItem={addItem} />{' '}
      </Grid>
    </Grid>
  );
};

export default ToDo;
