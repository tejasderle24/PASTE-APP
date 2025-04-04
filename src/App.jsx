import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Paste, ViewPaste,Navbar } from './components/index';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pastes" element={<Paste />} />
            <Route path="/paste/:id" element={<ViewPaste />} />
            
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;