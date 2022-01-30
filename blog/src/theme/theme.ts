import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
  },
  // Palette URL: https://coolors.co/41d3bd-fffff2-de6449-407899
  palette: {
    primary: {
      main: '#407899',
    },
    secondary: {
      main: '#DE6449',
    },
    text: {
      primary: '#062F5B',
    },
    background: {
      default: '#FFFFF2'
    }
  },
});

export const useStyles = makeStyles({
  app: {
    height: '100%',
    width: '100%',
    margin: 10,
    background: theme.palette.background.default
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-around',
  },
  contentField: {
    width: '90%',
    marginTop: 10
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    width: '90%',
  },
  blogPost: {
    margin: 10,
    width: '95%',
    backgroundColor: theme.palette.background.default
  },
  credentialsForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between'
  },
  credentialsItem: {
    marginTop: 5
  },
  // To get rid of the link styling:
  routerLink: {
    textDecoration: 'inherit',
    color: 'inherit',
  },
  navBarButton: {
    color: 'inherit',
  }
});
