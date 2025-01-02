import React from 'react';
import { Github, Linkedin, Mail, Terminal, Command, Code2, Database, Shield } from 'lucide-react';
import TerminalWindow from './TerminalWindow';
import TypeWriter from './TypeWriter';

export default function Hero() {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-full ring-4 ring-purple-500/30 group">
          <Terminal 
            className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transform group-hover:scale-110 transition-all duration-300" 
            strokeWidth={1.5}
          />
          <div className="absolute inset-0 bg-purple-500/10 rounded-full animate-pulse" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <div>
          <h1 className="text-5xl font-bold font-mono group">
            <span className="text-purple-400 group-hover:text-purple-300 transition-colors">$</span>{' '}
            <TypeWriter 
              text="Jaydeep Sompalli"
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 bg-clip-text text-transparent transition-all duration-300"
              withSound={true}
            />
          </h1>
          <p className="text-gray-400 mt-2 font-mono group-hover:text-gray-300 transition-colors">Tech Professional</p>
        </div>
      </div>

      <TerminalWindow />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors group">
          <Code2 className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold mb-1 font-mono group-hover:text-purple-300 transition-colors">Development</h3>
          <p className="text-sm text-gray-400">Python, JavaScript, TypeScript</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors group">
          <Command className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold mb-1 font-mono group-hover:text-purple-300 transition-colors">Systems</h3>
          <p className="text-sm text-gray-400">Linux, Bash, DevOps</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors group">
          <Database className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold mb-1 font-mono group-hover:text-purple-300 transition-colors">Data Science</h3>
          <p className="text-sm text-gray-400">ML, NLP, Analytics</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors group">
          <Shield className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold mb-1 font-mono group-hover:text-purple-300 transition-colors">Security</h3>
          <p className="text-sm text-gray-400">DevSecOps, Pen Testing</p>
        </div>
      </div>

      <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
        Georgia State University Computer Science graduate with a focus on Data Science and Cybersecurity. Previously interned at Georgia Tech Research Institute, 
        specializing in Large Language Models and DevSecOps. Passionate about solving complex problems through innovative software solutions and exploring the intersection 
        of AI and security. Actively pursuing interests in IT fields such as networking, cloud computing, cybersecurity, data science, and machine learning.
      </p>

      
      <div className="flex space-x-6 pt-4">
        <a href="https://github.com/jaysomp" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200 group">
          <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/in/jaydeep-sompalli-558a50190/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200 group">
          <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
        </a>
        <a href="mailto:jaydeepsompalli@gmail.com" className="transform hover:scale-110 transition-transform duration-200 group">
          <Mail className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
}