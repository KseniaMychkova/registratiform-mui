import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/index'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/registration' element={<RegistrationPage></RegistrationPage>}></Route>
    </Routes>
  );
}

export default App;
