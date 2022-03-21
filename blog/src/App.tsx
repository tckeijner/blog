import { theme, useStyles } from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import EditPost from './Posts/Edit/EditPost';
import { Provider } from 'react-redux';
import store, { persistor } from './state/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Posts from './Posts/Published/PublishedPosts';
import NavBar from './Home/NavBar';
import RegisterUser from './User/Register';
import Login from './User/Login';
import { StyledEngineProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
