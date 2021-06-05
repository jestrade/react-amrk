import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (username && password) {
      const user = {
        username,
        password,
      };

      console.log(user);

      setUsername('');
      setPassword('');
    }
  };

  return (
    <form>
      <div>
        <TextField
          label="Username"
          variant="filled"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          size="small"
          type="text"
          value={username}
        />
      </div>
      <div>
        <TextField
          label="Password"
          variant="filled"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          size="small"
          type="password"
          value={password}
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
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
