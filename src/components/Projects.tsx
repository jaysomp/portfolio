import React from 'react';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const handleScrollToHomelab = () => {
    const element = document.getElementById('homelab');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "This Website Itself! 🚀",
      description: "Built and deployed this portfolio website with a CI/CD pipeline that automates deployments to both AWS S3 and GitHub Pages. The infrastructure is managed using Terraform, and GitHub Actions handles automatic updates on every push to the main branch.",
      link: "http://jaysomp-portfolio.s3-website-us-east-1.amazonaws.com/",
      repo: "https://github.com/jaysomp/portfolio",
      technologies: ["CI/CD", "AWS S3", "GitHub Actions", "Terraform", "Cloud Deployment", "Automation"],
      isExternal: true
    },
    {
      title: "Azure SOC Simulation",
      description: "Built a cloud-based Security Operations Center (SOC) simulation using Microsoft Sentinel, Azure Virtual Machines, and Network Security Groups. Configured SIEM log ingestion pipelines with Log Analytics and KQL to detect and visualize cyber threats, leveraging GeoIP data for geographic insights.",
      link: "https://github.com/jaysomp/Azure-SOC-Sim",
      technologies: ["Azure", "Microsoft Sentinel", "KQL", "SIEM", "Log Analytics", "Cloud Security"],
      isExternal: true
    },
    {
      title: "AI-Powered UFC Fight Analytics: LLM-Driven Insights Platform",
      description: "Developed an AI-powered chatbot using a GPT-4 LLM agent system integrated with LangChain for natural language fight analysis and predictions. Combined XGBoost for predictive modeling, real-time data visualization with PandasAI, and a BCNF-normalized SQLite database for efficient querying, all delivered through a sleek Streamlit interface.",
      link: "https://github.com/jaysomp/tko-analytics",
      technologies: ["Python", "GPT-4", "Large Language Models", "LangChain", "XGBoost", "SQLite", "PandasAI", "Streamlit"],
      videoUrl: "https://www.youtube.com/embed/Kjz1sZM8h_8", // Embed the video
      isExternal: true,
    },
    {
      title: "Ubuntu Homelab",
      description: "Self-hosted homelab running containerized services including Kasm, OpenWeb UI, Portainer. Demonstrates expertise in Linux administration and Docker orchestration.",
      link: "#", // Local scrolling
      technologies: ["Linux", "Docker", "Containers", "SSH"],
      isExternal: false,
      onClick: handleScrollToHomelab,
    },
    {
      title: "Azure SOC Simulation",
      description: "Built a cloud-based Security Operations Center (SOC) simulation using Microsoft Sentinel, Azure Virtual Machines, and Network Security Groups. Configured SIEM log ingestion pipelines with Log Analytics and KQL to detect and visualize cyber threats, leveraging GeoIP data for geographic insights.",
      link: "https://github.com/jaysomp/Azure-SOC-Sim",
      technologies: ["Azure", "Microsoft Sentinel", "KQL", "SIEM", "Log Analytics", "Cloud Security"],
      isExternal: true
    },
    {
      title: "Classifying Diseases/Illnesses",
      description: "Developed machine learning models (Gaussian Naive Bayes, SVM, Decision Trees, Random Forest) to classify illnesses based on patient symptoms, aiding physicians in preparation for patient visits.",
      link: "https://github.com/jaysomp/Projects/blob/main/Data-Science-Projects/Classifying-Diseases-Illnesses/Disease_PredictionModel.ipynb",
      technologies: ["Python", "Scikit-Learn", "Machine Learning", "Data Analysis", "Random Forest"],
      isExternal: true,
    },

  

  ];
  

  return (
    <div className="mt-32">
      <div className="flex items-center space-x-3 mb-12">
        <Briefcase className="w-8 h-8 text-purple-400" />
        <h2 className="text-3xl font-bold">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
