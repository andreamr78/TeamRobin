import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import IndividualPage from '../src/pages/IndividualPage';
import SavedPages from '../src/pages/SavedPages';
import StartPage from '../src/pages/StartPage';
import SignUp from '../src/pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />  
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/saved" element={<SavedPages />} />
        <Route path="/individual/:id" element={<IndividualPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;


