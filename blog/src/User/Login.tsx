import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useStyles } from '../theme/theme';
import { requestAuthToken } from '../webapi/authentication';
import { loginUser } from '../webapi/authSlice';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const authenticationToken: string = await requestAuthToken({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
    dispatch(loginUser({ authenticationToken }));
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
