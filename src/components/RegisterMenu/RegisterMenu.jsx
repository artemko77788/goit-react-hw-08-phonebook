import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useLoginMutation } from 'redux/authSlice';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useCallback } from 'react';
import Container from '@mui/material/Container';

const RegisterMenu = () => {
  const [login] = useLoginMutation();

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
      console.log(form);

      login(form);
      setform({ name: '', email: '', password: '' });
    },
    [form, login]
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
            Primary
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterMenu;
