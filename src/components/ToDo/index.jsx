import useItems from './../../hooks/useItems';
import List from './List';
import Form from './Form';

const ToDo = () => {
  const { items, addItem, removeItem } = useItems();

  return (
    <>
      <h1>ToDo Component</h1>

      <h2>Item List</h2>
      <List items={items} removeItem={removeItem} />

      <h2>Add Item</h2>
      <Form addItem={addItem} />
    </>
  );
};

export default ToDo;
