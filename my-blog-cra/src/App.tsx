import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
