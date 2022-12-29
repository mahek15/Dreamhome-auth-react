import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Agents from './pages/Agents';
import Blogs from './pages/Blogs';
import Contacts from './pages/Contacts';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import Login from './pages/LoginSignup/Login';
import Register from './pages/LoginSignup/Register';
import Property from './pages/Property';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/property' element={<Property/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/agents' element={<Agents/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
