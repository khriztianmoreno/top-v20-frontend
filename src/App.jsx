import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import InvoicePage from './pages/Invoice';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth/login" element={<AboutPage />} />
          <Route path="/auth/register" element={<AboutPage />} />
          <Route path="/invoices/:slug/" element={<InvoicePage />} />

          {/* Not Found */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
