import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './pages-parts/Header'
import Footer from './pages-parts/Footer'
import About from './pages/About';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Search from './pages/Search';
import Details from './pages/Details';
import News from './pages/News';
import BackInStock from './pages/BackInStock';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path='/news' exact element={<News />} />
      <Route path='/back-in-stock' exact element={<BackInStock />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details/*" element={<Details />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;
