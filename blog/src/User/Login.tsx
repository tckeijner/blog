import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useStyles } from '../theme/theme';
import { login } from '../webapi/authentication';

const Login = () => {
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    login({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
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
