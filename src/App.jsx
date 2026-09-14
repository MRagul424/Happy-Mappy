import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // or './Navbar' depending on your components folder location
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import TravelPlansPage from './pages/TravelPlansPage';
import ExplorePage from './pages/ExplorePage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/travel-plans" element={<TravelPlansPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;