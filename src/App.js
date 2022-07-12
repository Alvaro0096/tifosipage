import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Form from './pages/Form';
import Header from './Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' exact element={<MainPage />}/>
            <Route path='/form' exact element={<Form />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
