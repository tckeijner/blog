import { Button, CircularProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../state/reducers';
import { useStyles } from '../theme/theme';
import { loginUser } from '../webapi/authSlice';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const status = useSelector((state: AppState) => state.authentication.status);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    dispatch(
      loginUser({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })
    );
  };

  const spinner = <CircularProgress className={classes.credentialsItem} />;

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
        {status === 'authenticating' ? spinner : null}
      </Box>
    </form>
  );
};

export default Login;
