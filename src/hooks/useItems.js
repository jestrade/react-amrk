import { useState } from 'react';
import initialValues from './../components/ToDo/items.json';

const useItems = () => {
  const [items, setItems] = useState(initialValues);

  const addItem = (item) => {
    const newArray = [...items, item];
    setItems(newArray);
  };

  const removeItem = (itemId) => {
    const newArray = items.filter(({ id }) => id !== itemId);

    setItems(newArray);
  };

  return {
    items,
    addItem,
    removeItem,
  };
};

export default useItems;
