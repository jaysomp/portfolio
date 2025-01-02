import React from 'react';
import { Code2, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  videoUrl?: string; // Optional property for the video URL
}

export default function ProjectCard({ title, description, link, technologies, videoUrl }: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div className="relative space-y-6">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <Code2 className="w-6 h-6 text-purple-400" />
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/link"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Embed Video */}
        {videoUrl && (
          <div className="mt-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={videoUrl}
                title={`${title} Demo Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
