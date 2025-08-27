import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  tags: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Dieffenbachia Portfolio",
      description: "A beautiful and responsive portfolio website showcasing modern design principles.",
      longDescription: "This portfolio website features a clean, modern design with smooth animations and responsive layouts. Built with attention to detail and user experience, it showcases various projects and skills in an elegant manner.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://euphonious-dieffenbachia-4a51d2.netlify.app/",
      tags: ["React", "CSS", "Responsive"],
      category: "web"
    },
    {
      id: 2,
      title: "Personal Portfolio V2",
      description: "Enhanced version of personal portfolio with advanced features and animations.",
      longDescription: "An upgraded portfolio website featuring advanced animations, interactive elements, and a modern tech stack. This version includes improved performance and user experience.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://leeza-three.vercel.app/",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      category: "web"
    },
    {
      id: 3,
      title: "Unit Converter Tool",
      description: "A comprehensive unit converter application built with Python and Streamlit.",
      longDescription: "This application provides conversion capabilities for various units including length, weight, temperature, and more. Built with Python and Streamlit for a seamless user experience.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-python-unit-converter-unit-converter-dzudnm.streamlit.app/",
      tags: ["Python", "Streamlit", "Data"],
      category: "tool"
    },
    {
      id: 4,
      title: "Password Generator",
      description: "Secure password generator with customizable options and strength indicators.",
      longDescription: "A robust password generator that creates secure passwords with customizable length and character sets. Features password strength indicators and copy-to-clipboard functionality.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-py-password-generator-password-generator-9t6fay.streamlit.app/",
      tags: ["Python", "Security", "Streamlit"],
      category: "tool"
    },
    {
      id: 5,
      title: "Growth Mindset Tracker",
      description: "Personal development application for tracking growth mindset principles.",
      longDescription: "An interactive application designed to help users track their personal growth journey, set goals, and maintain a growth mindset through various exercises and tracking features.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-growth-mindset--main-ss7rjx.streamlit.app/",
      tags: ["Python", "Personal Development", "Streamlit"],
      category: "app"
    },
    {
      id: 6,
      title: "Random Joke Generator",
      description: "Fun application that generates random jokes to brighten your day.",
      longDescription: "A lighthearted application that fetches and displays random jokes from various categories. Perfect for adding some humor to your day with a clean, user-friendly interface.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-random-joke-generator-main-qy5ygq.streamlit.app/",
      tags: ["Python", "API", "Entertainment"],
      category: "app"
    },
    {
      id: 7,
      title: "Mood Tracker",
      description: "Emotional wellness application for tracking daily moods and patterns.",
      longDescription: "A comprehensive mood tracking application that helps users monitor their emotional well-being, identify patterns, and maintain better mental health through visualization and insights.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-mood-tracker-main-2sdgc2.streamlit.app/",
      tags: ["Python", "Health", "Data Visualization"],
      category: "app"
    },
    {
      id: 8,
      title: "Class Assignment Portal",
      description: "Educational platform for managing and submitting class assignments.",
      longDescription: "A comprehensive educational platform that allows students to view, manage, and submit assignments. Features include deadline tracking, progress monitoring, and grade visualization.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-class-7-assignment-main-vbs7zg.streamlit.app/",
      tags: ["Python", "Education", "Management"],
      category: "app"
    },
    {
      id: 9,
      title: "Food Recommendation System",
      description: "Smart food recommendation application based on preferences and dietary needs.",
      longDescription: "An intelligent food recommendation system that suggests meals based on user preferences, dietary restrictions, and nutritional needs. Features recipe suggestions and meal planning.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-food-main-0jhsqe.streamlit.app/",
      tags: ["Python", "AI", "Food Tech"],
      category: "app"
    },
    {
      id: 10,
      title: "Career Education Platform",
      description: "Comprehensive platform for career guidance and educational resources.",
      longDescription: "A comprehensive educational platform providing career guidance, skill assessment, and learning resources. Helps users navigate their career paths with personalized recommendations.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://babarshah786-career-education-main-g66csp.streamlit.app/",
      tags: ["Python", "Education", "Career"],
      category: "app"
    },
    {
      id: 11,
      title: "Trip Planner Application",
      description: "Smart travel planning application with itinerary management and recommendations.",
      longDescription: "An intelligent trip planning application that helps users plan their travels with smart recommendations, itinerary management, and budget tracking. Features include destination suggestions and travel tips.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://leezatripplanner.streamlit.app/",
      tags: ["Python", "Travel", "Planning"],
      category: "app"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'app', label: 'Applications' },
    { key: 'tool', label: 'Tools' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setFilter(category.key)}
              variant={filter === category.key ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      💻
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-400">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-8xl opacity-30">💻</div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;