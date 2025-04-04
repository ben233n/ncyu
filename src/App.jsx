import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Look from './pages/Look/Look';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'; // 引入 Provider
import store from '../src/redux/store'; // 引入 Redux store

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Provider store={store}>  {/* 提供 Redux store */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="look/:id" element={<Look />} />
      </Routes>
    </Provider>
  );
}

export default App;