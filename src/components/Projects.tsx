import React from 'react';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      "title": "AI-Powered UFC Fight Analytics: LLM-Driven Insights Platform",
      "description": "Developed an AI-powered chatbot using a GPT-4 LLM agent system integrated with LangChain for natural language fight analysis and predictions. Combined XGBoost for predictive modeling, real-time data visualization with PandasAI, and a BCNF-normalized SQLite database for efficient querying, all delivered through a sleek Streamlit interface.",
      "link": "https://github.com/jaysomp/tko-analytics",
      "technologies": ["Python", "GPT-4", "Large Language Models", "LangChain", "XGBoost", "SQLite", "PandasAI", "Streamlit"],
      "videoUrl": "https://www.youtube.com/embed/Kjz1sZM8h_8"
    },
    {
      title: "Classifying Diseases/Illnesses",
      description: "Developed machine learning models (Gaussian Naive Bayes, SVM, Decision Trees, Random Forest) to classify illnesses based on patient symptoms, aiding physicians in preparation for patient visits",
      link: "https://github.com/jaysomp/Projects/blob/main/Data-Science-Projects/Classifying-Diseases-Illnesses/Disease_PredictionModel.ipynb",
      technologies: ["Python", "Scikit-Learn", "Machine Learning", "Data Analysis", "Random Forest"]
    },
    {
      title: "Emotion Classification System",
      description: "Naive Bayes-based emotion classification model achieving 0.88 F1 score for text emotion analysis",
      link: "https://github.com/jaysomp/Projects/blob/main/Data-Science-Projects/Emotion-classification-using-Naive-Bayes-Classifier/Emotion_Classification.ipynb",
      technologies: ["Python", "Scikit-Learn", "NLP", "Machine Learning"]
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
