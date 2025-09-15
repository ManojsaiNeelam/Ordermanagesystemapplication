import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Category from './Category';
import Customer from './Customer';
import Employee from './Employee';

import OrderDetails from './OrderDetails';
import Order from './Order';
import Product from './Product';
import Shipper from './Shipper';
import Supplier from './Supplier';

// NavBar Component
function Navbarjohn() {
  const linkStyle = { margin: '10px', color: 'white', textDecoration: 'none' };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#132143ff', display:'flex',justifyContent:'center', alignItems:'center' }}>
      <Link to="/" style={linkStyle}>HOME</Link>
      <Link to="/Customer" style={linkStyle}>CUSTOMER</Link>
      <Link to="/Category" style={linkStyle}>CATEGORY</Link>
      <Link to="/Employee" style={linkStyle}>EMPLOYEE</Link>
     
      <Link to="/OrderDetails" style={linkStyle}>ORDERDETAIL</Link>
       <Link to="/Order" style={linkStyle}>ORDER</Link>
      <Link to="/product" style={linkStyle}>PRODUCT</Link>
      <Link to="/Shipper" style={linkStyle}>SHIPPER</Link>
      <Link to="/Supplier" style={linkStyle}>SUPPLIER</Link>
    </nav>
  );
}

// Dummy Components
function Home() { return <h2 style={{textAlign:'center'}}> WELCOME TO HOME PAGE </h2>; }

function Navappjohn() {
  return (
    <Router>
      <Navbarjohn />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Employee" element={<Employee />} />
        
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Shipper"element={<Shipper/>}/>
        <Route path="/Supplier" element={<Supplier/>}/>
      </Routes>
    </Router>
  );
}

export default Navappjohn;
