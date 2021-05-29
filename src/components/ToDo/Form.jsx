import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = ({ addItem }) => {
  const [item, setItem] = useState('');
  const handleClick = () => {
    if (item) {
      const newItem = {
        id: Date.now(),
        content: item,
      };
      addItem(newItem);
      setItem('');
    }
  };

  return (
    <form>
      <div>
        <label>
          <TextField
            id="filled-basic"
            label="Items"
            variant="filled"
            name="item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
            placeholder="Add item"
            type="text"
            value={item}
          />
        </label>
      </div>
      <div>
        <Button
          color="primary"
          onClick={() => {
            handleClick();
          }}
          type="button"
          variant="contained"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
