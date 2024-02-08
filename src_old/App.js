import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import { useState } from 'react';

function App() {
  const [isLoggedIn , setLoggine]=useState(false)
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setLoggine={setLoggine}/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login setLoggine={setLoggine}/>}></Route>
        <Route path='/Signup' element={<Signup setLoggine={setLoggine}/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
