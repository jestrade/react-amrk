import { useState, useEffect } from 'react';
import routes from './../services/routes';
import * as http from './../services/http';

const { TASKS } = routes;

const useItems = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItems = () => {
    setIsLoading(true);

    setTimeout(() => {
      http.get(TASKS).then((response) => {
        const taskList = response.data.data;
        setItems(taskList);
        setIsLoading(false);
      });
    }, 2000);
  };

  useEffect(() => {
    getItems();
  }, []);

  const addItem = (item) => {
    http.post(TASKS, item).then((response) => {
      //solución 1
      getItems();

      //solución 2
      /*
      const { data } = response;
      const newItems = [...items, data];
      setItems(newItems);
      */
    });
  };

  const removeItem = (id) => {
    const item = {
      id,
    };
    http.remove(TASKS, item).then(() => {
      //solución 1
      getItems();

      //solución 2
      /*
      const newArray = items.filter(({ _id }) => _id !== id);
      setItems(newArray);
      */
    });
  };

  return {
    items,
    addItem,
    removeItem,
    isLoading,
  };
};

export default useItems;
