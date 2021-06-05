import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useItems from './../../../hooks/useItems';
import Items from './Items';
import FormToDo from './FormToDo';

const ToDo = () => {
  const { items, isLoading, addItem, removeItem } = useItems();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography variant="h4">Item List</Typography>
        <Items items={items} isLoading={isLoading} removeItem={removeItem} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Add Item</Typography>
        <FormToDo addItem={addItem} />{' '}
      </Grid>
    </Grid>
  );
};

export default ToDo;
