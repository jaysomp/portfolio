import React, { useState, useEffect } from 'react';
import TypeWriter from './TypeWriter';

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const lines = [
    { prompt: 'whoami', output: 'jaydeep' },
    { prompt: 'pwd', output: '/home/jaydeep/projects' },
    { prompt: 'ls -l skills/', output: 'total 4\ndrwxr-xr-x  2 jaydeep  wheel  python\ndrwxr-xr-x  2 jaydeep  wheel  machine-learning\ndrwxr-xr-x  2 jaydeep  wheel  cybersecurity\ndrwxr-xr-x  2 jaydeep  wheel  data-science' },
    { prompt: 'cat /etc/motd', output: 'Welcome to my portfolio! Feel free to explore my projects below.' }
  ];

  useEffect(() => {
    const showLine = (index: number) => {
      setVisibleLines(prev => [...prev, index]);
    };

    lines.forEach((_, index) => {
      setTimeout(() => showLine(index), index * 1500);
    });
  }, []);

  return (
    <div className="bg-gray-900/80 rounded-lg border border-gray-700/50 overflow-hidden font-mono text-sm">
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border-b border-gray-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="text-gray-400 text-xs ml-2">bash</span>
      </div>
      <div className="p-4 space-y-2">
        {lines.map((line, index) => (
          visibleLines.includes(index) && (
            <div key={index} className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ <TypeWriter text={line.prompt} delay={50} /></span>
              </div>
              <div className="text-gray-400 whitespace-pre-line pl-6">
                <TypeWriter text={line.output} delay={20} />
              </div>
            </div>
          )
        ))}
        <div className="animate-pulse text-gray-400">_</div>
      </div>
    </div>
  );
}