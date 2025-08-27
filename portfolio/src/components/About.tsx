import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User-centered design",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development",
      description: "Python, Node.js, Database Design",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Agile, Git, Communication",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Creative solutions, Critical thinking",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Latest technologies, Best practices",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <h3 className="text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hello! I'm Leeza Sarwar, a passionate Full Stack Developer and UI/UX Designer 
                with a love for creating innovative digital solutions. I believe in the power 
                of technology to transform ideas into reality..
              </p>
              <p>
                I started my tech journey with GIAIC ,
                 A transformative program equipping the next generation with cutting-edge 
                skills in AI, Web Development, Cloud Computing, and the Metaverse..
              </p>
              <p>
               My Goal: To grow as a developer who not only writes code but also designs meaningful digital experiences that impact real people’s lives.
               “I also work on setup planning, and I’d be happy to connect if you’re interested.”
              </p>
            </div>
          </div>

          {/* Animated Profile Card */}
          <div className="animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mx-auto mb-6 ">
                    <img 
                      src="/images/leeza.jpeg"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Leeza Sarwar</h4>
                  <p className="text-blue-400 mb-4">Full Stack Developer</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">10+</div>
                      <div className="text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">2+</div>
                      <div className="text-gray-400">Years Experience</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;