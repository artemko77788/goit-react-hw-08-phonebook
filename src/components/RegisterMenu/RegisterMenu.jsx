import TextField from '@mui/material/TextField';
import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useCallback } from 'react';
import Container from '@mui/material/Container';
import { authOperations } from 'redux/authOperations';
import { useDispatch } from 'react-redux';

const RegisterMenu = () => {
  const dispatch = useDispatch();

  const [form, setform] = useState({
    name: '',
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
        authOperations.register({
          email: form.email,
          name: form.name,
          password: form.password,
        })
      );
      setform({ name: '', email: '', password: '' });
    },
    [dispatch, form.email, form.name, form.password]
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
            onChange={onChange}
            sx={{
              color: 'orange',
            }}
            name="name"
            required
            id="standard-required"
            label="Name"
            variant="standard"
            value={form.name}
          />
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
            Registrate
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterMenu;
