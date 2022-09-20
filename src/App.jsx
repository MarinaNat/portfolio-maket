import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Footer from './components/elements/Footer/Footer';
import Header from './components/elements/Header/Header';
import Home from './components/elements/Home/Home';
import Blog from './components/elements/Blog/Blog';
import Work from './components/elements/Work/Work';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route
          path='*'
          element={<Home />}
        ></Route>
        <Route
          path='blog'
          element={<Blog />}
        ></Route>
        <Route
          path='works'
          element={<Work />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
