import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Category from './Category';
import Customer from './Customer';
import Employee from './Employee';
import Order from './Order';
import OrderDetails from './OrderDetails';
import Product from './Product';

// NavBar Component
function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: 'rgba(170, 221, 76, 1)' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/Customer" style={{ margin: '10px' }}>Customer</Link>
      <Link to="/Category" style={{ margin: '10px' }}>category</Link>
      <Link to="/Employee" style={{ margin: '10px' }}>Employee</Link>
      <Link to="/Order" style={{ margin: '10px' }}>Order</Link>
      <Link to="/OrderDetails" style={{ margin: '10px' }}>Orderdetails</Link>
      <Link to="/product" style={{ margin: '10px' }}>Product</Link>
    </nav>
  );
}

// Dummy Components
function Home() { return <h2>Home Page</h2>; }

function Navapp() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default Navapp;
