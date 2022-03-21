import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../theme/theme';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../state/reducers';

const NavBar = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(
    (state: AppState) => state.authentication.status === 'authenticated'
  );

  const loggedOutButtons = (
    <Fragment>
      <Link to='/register' className={classes.routerLink}>
        <Button className={classes.navBarButton}>Register</Button>
      </Link>
      <Link to='/login' className={classes.routerLink}>
        <Button className={classes.navBarButton}>Login</Button>
      </Link>
    </Fragment>
  );

  const loggedInButtons = (
    <Fragment>
      <Link to='/account' className={classes.routerLink}>
        <Button className={classes.navBarButton}>Account</Button>
      </Link>
    </Fragment>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          {isLoggedIn ? loggedInButtons : loggedOutButtons}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
