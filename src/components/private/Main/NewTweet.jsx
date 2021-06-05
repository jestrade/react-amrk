import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const NewTweet = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');
  const handleClick = () => {
    if (tweet) {
      const newTweet = {
        content: tweet,
      };
      addTweet(newTweet);
      setTweet('');
    }
  };

  return (
    <form>
      <div>
        <TextField
          id="filled-basic"
          helperText=""
          label="What's happening?"
          variant="filled"
          name="tweet"
          multiline
          rows={4}
          onChange={(e) => {
            setTweet(e.target.value);
          }}
          size="small"
          type="text"
          value={tweet}
        />
      </div>
      <div>
        <Button
          color="primary"
          onClick={() => {
            handleClick();
          }}
          type="button"
          size="large"
          variant="contained"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default NewTweet;
