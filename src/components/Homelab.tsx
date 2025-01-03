import React, { useState } from 'react';
import { Server, Monitor, Bot, Activity, Layout, Clipboard } from 'lucide-react';
import TypeWriter from './TypeWriter';
import dashboardImage from "../images/dash.png";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  command?: string;
  links?: { label: string; url: string }[];
  embedVideo?: string;
}

function ServiceCard({ title, description, icon, command, links, embedVideo }: ServiceCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (command) {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-mono font-semibold text-gray-200 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        {command && (
          <div className="bg-gray-900/50 rounded-md p-4 font-mono text-sm relative">
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 text-sm bg-gray-800 text-purple-300 px-2 py-1 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Clipboard className="w-4 h-4" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="bg-gray-800 rounded p-2 overflow-x-auto text-gray-300">
              {command}
            </pre>
          </div>
        )}


        {links && (
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20 hover:border-purple-500/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {embedVideo && (
          <div className="pt-4">
            <iframe
              className="w-full aspect-video rounded-lg"
              src={embedVideo}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Homelab() {
  const services = [
    {
      title: "Portainer",
      description:
        "Portainer is a user-friendly container management platform. It simplifies deploying and managing containerized apps across Docker, Docker Swarm, and Kubernetes. With its web-based interface, you can easily manage containers, images, networks, and volumes without diving deep into the command line. It’s available in free (Community Edition) and paid (Business Edition) versions, making it ideal for developers and DevOps teams.",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      command: `docker volume create portainer_data 
      \ndocker run -d -p 9443:9443 -p 8000:8000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest`,
      links: [{ label: "Learn more about Portainer", url: "https://youtu.be/iX0HbrfRyvc?si=8sCZefC-st7JR-Ho" }],
      embedVideo: "https://www.youtube.com/embed/QBNaOdNSsx8",
    },
    {
      title: "OpenWebUI for Self-Hosted LLMs Using Ollama",
      description:
        "OpenWebUI is a front-end, ChatGPT-like interface for using self-hosted large language models. I rely on local AI models daily because they’re free to use and perform exceptionally well on decent systems. OpenWebUI provides a GUI to access my models from any device at home, bypassing the Ollama CLI.",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      links: [
        { label: "Ollama Setup", url: "https://ollama.com/download" },
        { label: "OpenWebUI Docs", url: "https://docs.openwebui.com/" },
        { label: "More about OpenWebUI and Ollama", url: "https://youtu.be/Wjrdr0NU4Sk?si=jgMVYW-U7frBNxxx" },
      ],
      embedVideo: "https://www.youtube.com/embed/Wjrdr0NU4Sk",
    },
    {
      title: "Kasm Workspaces",
      description:
        "Kasm Workspaces lets you access applications and desktop environments through a web browser. Using container technology, it creates secure, isolated workspaces that are easy to manage and scale. I use Kasm to spin up quick instances of Linux distros, like running an isolated Kali Linux container for CTF challenges. You can even run a containerized browser within your browser—it’s incredibly versatile.",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      links: [
        { label: "Setup Guide", url: "https://docs.linuxserver.io/images/docker-kasm" },
        { label: "Video Overview", url: "https://youtu.be/1mb835Qsx-8?si=ySqyPs5f61yXVlRp" },
      ],
      embedVideo: "https://www.youtube.com/embed/1mb835Qsx-8",
    },
    {
      title: "Uptime Kuma",
      description:
        "I use Uptime Kuma to monitor the status of my personal webpage. The setup is super simple:",
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      command: `docker volume create uptime-kuma
      \ndocker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1`,
      embedVideo: "https://www.youtube.com/embed/r_A5NKkAqZM",
    },
    {
      title: "Custom Dashboard for My Homelab",
      description:
        "My custom dashboard, built with React + Vite, provides a clean interface for accessing all my services from any device.",
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      command: `git clone https://github.com/jaysomp/homelab-dash.git
      \ncd homelab-dash
      \ndocker build -t homelab-dashboard .
      \ndocker run -d -p 3030:3000 --name homelab-dashboard homelab-dashboard`,
      links: [
        { label: "Dashboard Repository", url: "https://github.com/jaysomp/homelab-dash" },
      ],
    },
  ];

  return (
<div
      id="homelab"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold font-mono group inline-flex items-center">
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors">$</span>
              <span className="ml-2">
                <TypeWriter text="./homelab-setup" className="text-gray-100" delay={100} />
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              My homelab is running on Ubuntu 22.04.5 LTS with Docker, serving as the foundation
              for a variety of self-hosted services. These are the tools I rely on daily, making it
              easy to access everything I need on my own private hardware while ensuring security
              and control. Below, I’ll walk you through the components of my setup and how they fit
              into my workflow for development, monitoring, and experimentation.
            </p>
            <div className="my-8">
              <img
                src={dashboardImage}
                alt="Homelab Dashboard"
                className="rounded-lg border border-gray-700 shadow-lg w-full"
              />
              <p className="text-gray-400 text-sm text-center mt-2">
                A snapshot of my custom homelab dashboard interface.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}