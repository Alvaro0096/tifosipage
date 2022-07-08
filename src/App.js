import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Card from './pages/Card';
import Header from './Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' exact element={<MainPage />}/>
            <Route path='/card' exact element={<Card />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
