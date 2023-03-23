import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ExhibitionPage from './pages/ExhibitionPage';
// import AdminPage from './pages/AdminPage';



function App() {
  return (
    <Router>
      <Routes > 
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        {/* <Route path='/exhibition' element={<ExhibitionPage />} />
        <Route path='/admin' element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
