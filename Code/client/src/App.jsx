import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  </Router>
);

export default App;
