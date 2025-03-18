import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HorsesPage from './pages/HorsesPage';
import FeedPage from './pages/FeedPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/horses" element={<HorsesPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/alaska/feed" element={<FeedPage />} />
        <Route path="*" element={<Navigate to="/horses" replace />} />
      </Routes>
    </Router>
  );
};

export default App; 