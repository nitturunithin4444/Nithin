//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Form from './login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './login';
import Registration from './login';
import {useEffect} from 'react';
function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route index element={<Registration/>}></Route>
        <Route path="login" element={<login/>}></Route>
        <Route path=" " elment={<sign up/>}></Route>
        </Routes>
        </BrowserRouter>
        <useEffect/>
        </>
    </div>
  );
}

export default App;
