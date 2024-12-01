import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { FindMentors } from './pages/FindMentors';
import { SignIn } from './pages/SignIn';

/**
 * Root component of the application
 * Handles routing and layout structure
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<FindMentors />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;