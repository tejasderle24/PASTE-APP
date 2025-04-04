import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Paste, ViewPaste, Navbar } from './components/index';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900 text-white">
        {/* Navbar stays on top */}
        <header className="shadow-md bg-slate-800">
          <Navbar />
        </header>

        {/* Main content grows to fill remaining space */}
        <main className="flex-grow px-4 py-6 sm:px-8 md:px-16 lg:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pastes" element={<Paste />} />
            <Route path="/paste/:id" element={<ViewPaste />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Optional footer for consistency */}
        <footer className="bg-slate-800 text-center py-4 text-sm border-t border-slate-700">
          &copy; {new Date().getFullYear()} Paste App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
