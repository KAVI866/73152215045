import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './Context/ContextProduct';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import About from './Pages/About';

const App = () => (
  <ProductProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </ProductProvider>
);

export default App;