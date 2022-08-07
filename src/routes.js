import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Filme from './pages/filme';
import Header from './components/Header';
import Error from './pages/error';
import Favorite from './pages/Favorites';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filme/:id" element={<Filme />} />
        <Route path="/Favorite" element={<Favorite />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
