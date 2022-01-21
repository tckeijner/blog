import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../theme/theme';

const NavBar = () => {
  const classes = useStyles();

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
          <Link to='/register' className={classes.routerLink}>
            <Button className={classes.navBarButton}>Register</Button>
          </Link>
          <Link to='/login' className={classes.routerLink}>
            <Button className={classes.navBarButton}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
