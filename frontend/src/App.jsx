import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Listing from './pages/Listing';
import Details from './pages/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {


  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
          path="/listing"
          element={ <Listing /> }
        />
        <Route
          path="/details/:id"
          element={ <Details /> }
        />
        <Route
          path="/cart"
          element={ <Cart /> }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
