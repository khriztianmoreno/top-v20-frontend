import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home';
import AboutPage from './pages/About';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth/login" element={<AboutPage />} />
          <Route path="/auth/register" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
