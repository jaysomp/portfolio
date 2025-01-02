import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import TypeWriter from './TypeWriter';

export default function Contact() {
  return (
    <div className="mt-32 mb-16">
      <h2 className="text-3xl font-bold mb-8 font-mono group inline-flex items-center">
        <span className="text-purple-400 group-hover:text-purple-300 transition-colors">$</span>
        <span className="ml-2">
          <TypeWriter text="./contact-me" className="text-gray-100" delay={100} />
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a 
          href="mailto:jaydeepsompalli@gmail.com"
          className="group bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
        >
          <Mail className="w-6 h-6 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-mono text-lg mb-2 group-hover:text-purple-300 transition-colors">Email</h3>
          <p className="text-gray-400 text-sm">jaydeepsompalli@gmail.com</p>
        </a>

        <a 
          href="https://www.google.com/maps/place/Atlanta,+GA"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
        >
          <MapPin className="w-6 h-6 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-mono text-lg mb-2 group-hover:text-purple-300 transition-colors">Location</h3>
          <p className="text-gray-400 text-sm">Atlanta, GA</p>
        </a>

        <div className="group bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
          <Phone className="w-6 h-6 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-mono text-lg mb-2 group-hover:text-purple-300 transition-colors">Phone</h3>
          <p className="text-gray-400 text-sm">Available upon request</p>
        </div>
      </div>
    </div>
  );
}