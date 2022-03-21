import { theme, useStyles } from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import EditPost from './Posts/Edit/EditPost';
import { Provider } from 'react-redux';
import store from './state/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Posts from './Posts/Published/PublishedPosts';
import NavBar from './Home/NavBar';
import RegisterUser from './User/Register';
import Login from './User/Login';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <NavBar></NavBar>
            <div className={classes.app}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='new-post' element={<EditPost />} />
                <Route path='posts' element={<Posts />} />
                <Route path='register' element={<RegisterUser />} />
                <Route path='login' element={<Login />} />
              </Routes>
            </div>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
