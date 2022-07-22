import TextField from '@mui/material/TextField';
import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useCallback } from 'react';
import Container from '@mui/material/Container';
import { logIn } from 'redux/authOperations';
import { useDispatch } from 'react-redux';

const LoginUser = () => {
  const dispatch = useDispatch();

  const [form, setform] = useState({
    email: '',
    password: '',
  });

  const onChange = useCallback(
    e => {
      setform(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setform]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(
        logIn({
          email: form.email,
          password: form.password,
        })
      );
      setform({ email: '', password: '' });
    },
    [dispatch, form.email, form.password]
  );

  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          maxWidth: '250px',
          margin: '2rem',
          padding: '1rem',
          backgroundColor: '#eeeeee82',
        }}
      >
        <form onSubmit={onSubmit}>
          <TextField
            value={form.email}
            name="email"
            onChange={onChange}
            required
            id="standard-required"
            label="Email"
            variant="standard"
            type="email"
          />

          <TextField
            value={form.password}
            name="password"
            onChange={onChange}
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />

          <Button type="submit" variant="contained">
            Primary
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginUser;
