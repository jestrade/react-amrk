import { useState } from 'react';

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
      <p>
        <input
          name="item"
          onChange={(e) => {
            setItem(e.target.value);
          }}
          placeholder="New ToDo"
          type="text"
          value={item}
        />
      </p>
      <p>
        <button
          onClick={() => {
            handleClick();
          }}
          type="button"
        >
          Add
        </button>
      </p>
    </form>
  );
};

export default Form;
