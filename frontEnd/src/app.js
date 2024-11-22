import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PostPage from './pages/PostPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostPage />} />
<<<<<<< HEAD
        <Route path="/Dashboard" element={<Dashboard />} />
=======
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> e7f8d968c872e0f5f570e942c7f951ba549c585b
      </Routes>
    </Router>
  );
}

export default App;
