import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes, Link } from 'react-router-dom'
import Look from './pages/Look/Look'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="look/:id" element={<Look/>} />
    </Routes>
  )
}

export default App
