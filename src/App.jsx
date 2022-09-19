import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Footer from './components/elements/Footer/Footer';
import Header from './components/elements/Header/Header';
import Main from './components/elements/Main/Main';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route
          path='home'
          element={<Main />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
