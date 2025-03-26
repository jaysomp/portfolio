import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  isExternal: boolean;
  onClick?: () => void;
  videoUrl?: string;
  repo?: string; // Optional GitHub repository link
}

export default function ProjectCard({
  title,
  description,
  link,
  technologies,
  isExternal,
  onClick,
  videoUrl,
  repo,
}: ProjectCardProps) {
  const handleClick = (event: React.MouseEvent) => {
    if (!isExternal && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      {videoUrl && (
        <div className="pt-4">
          <iframe
            className="w-full aspect-video rounded-lg"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="flex items-center space-x-4">
        <a
          href={isExternal ? link : "#"}
          onClick={handleClick}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors group"
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors group"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}
