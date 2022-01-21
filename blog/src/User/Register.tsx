import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useStyles } from '../theme/theme';

const RegisterUser = () => {
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    if (formData.get('password') === formData.get('password-confirm')) {
      post({
        email: formData.get('email'),
        password: formData.get('password'),
      });
    } else {
      console.log("Passwords don't match");
    }
  };

  const post = (req: any) => {
    return fetch('http://localhost:4000/registerUser', {
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
          label='Password'
          type='password'
          variant='outlined'
          name='password'
        />
        <TextField
          className={classes.credentialsItem}
          id='password-confirm'
          label='Confirm password'
          type='password'
          variant='outlined'
          name='password-confirm'
        />
        <Button
          className={classes.credentialsItem}
          variant='contained'
          color='primary'
          type='submit'
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default RegisterUser;
