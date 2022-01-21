import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useStyles } from '../theme/theme';

const Login = () => {
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    post({
      email: formData.get('email'),
      password: formData.get('password'),
    });
  };

  const post = (req: any) => {
    return fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.credentialsForm}>
        <TextField
          className={classes.credentialsItem}
          id='email'
          label='E-mail'
          variant='outlined'
          name='email'
        />
        <TextField
          className={classes.credentialsItem}
          id='password'
          type='password'
          label='Password'
          variant='outlined'
          name='password'
        />
        <Button
          className={classes.credentialsItem}
          variant='contained'
          color='primary'
          type='submit'
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
