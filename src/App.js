
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';



function App() {
 
  return (
    <>
    <BrowserRouter >
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-single/:id" element={<ProductDetail />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}
export default App
