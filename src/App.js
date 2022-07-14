import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Form from './pages/Form';
import Header from './Header';
import Card from './pages/Card';
import { Context } from './context/Context';
import { useState } from 'react';

function App() {
  const [valueContext, setValueContext] = useState('string from context');
  return (
    <>
      <BrowserRouter> 
        <Header />
          <Context.Provider value={{valueContext, setValueContext}}>
            <Routes>
              <Route path='/' exact element={<MainPage />}/>
              <Route path='/form' exact element={<Form />}/>
              <Route path='/card' exact element={<Card />}/>
            </Routes>
          </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
