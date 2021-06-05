import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FormSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleClick = () => {
    if (name && username && email && password && passwordConfirmation) {
      const user = {
        name,
        username,
        email,
        password,
        passwordConfirmation,
      };

      console.log(user);

      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    }
  };

  return (
    <form>
      <div>
        <TextField
          label="Name"
          variant="filled"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          size="small"
          type="text"
          value={name}
        />
      </div>
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
          label="Email"
          variant="filled"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          size="small"
          type="email"
          value={email}
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
        <TextField
          label="Password Confirmation"
          variant="filled"
          name="passwordConfirmation"
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
          size="small"
          type="text"
          value={passwordConfirmation}
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
          SignUp
        </Button>
      </div>
    </form>
  );
};

export default FormSignUp;
