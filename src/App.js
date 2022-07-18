import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Form from './pages/Form';
import Header from './Header';
import Card from './pages/Card';
import UserProvider from './context/UserContext';
import { ThemeProvider } from '@emotion/react';
import { theme } from './data/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter> 
          <UserProvider>
            <Header />
              <Routes>
                <Route path='/' exact element={<MainPage />}/>
                <Route path='/form' exact element={<Form />}/>
                <Route path='/card' exact element={<Card />}/>
              </Routes>
            </UserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
