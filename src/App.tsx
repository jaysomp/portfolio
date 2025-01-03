import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Homelab from './components/Homelab';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <Hero />
        <Projects />
        <Contact />
      </div>
      <Homelab />
    </div>
  );
}

export default App;