// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LangwaLanding from './components/LangwaLanding';
import BlogPost from './components/BlogPost'; // Import the BlogPost component
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LangwaLanding />} />
          
          {/* Individual Blog Post Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Fallback Route for Undefined Paths */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">404 - Page Not Found</h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

