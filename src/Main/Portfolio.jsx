import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaTelegram } from 'react-icons/fa';

const colors = {
  primary: 'text-indigo-600',
  bgPrimary: 'bg-indigo-600',
  hoverPrimary: 'hover:text-indigo-700',
  borderPrimary: 'border-indigo-600',
  bgSecondary: 'bg-indigo-50',
  textSecondary: 'text-indigo-100',
  gradient: 'bg-gradient-to-r from-indigo-600 to-purple-500',
};

function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${colors.primary}`}>Seniya Sultan</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`${colors.primary} hover:underline decoration-2 underline-offset-4 ${colors.hoverPrimary}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HomeSection() {
  return (
    <section id="home" className={`${colors.gradient} text-white py-20 relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Full Stack Developer<br />
            <span className="text-indigo-200 mt-2 block text-3xl md:text-4xl">
              React | Node.js | MongoDB
            </span>
          </h2>
          <p className="text-lg md:text-xl text-indigo-100">
            Crafting digital experiences with modern web technologies
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className={`${colors.bgSecondary} ${colors.primary} px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-100 transition-all`}
            >
         <a
  href="/SeniyaSultanComputerScience-CV.pdf" // Path relative to public folder
  download="SeniyaSultan-CV.pdf"
  className={`${colors.bgSecondary} ${colors.primary} px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-100 transition-all`}
>
  <FaFileDownload /> Download CV
</a>
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/SeniyaSultan" className="hover:scale-110 transition-transform">
                <FaGithub size={28} className="text-indigo-100" />
              </a>
              <a href="https://t.me/SeniyaSultanCs" className="hover:scale-110 transition-transform">
                <FaTelegram size={28} className="text-indigo-100" />
              </a>
              <a href="https://www.linkedin.com/in/seniya-sultan-464486324/" className="hover:scale-110 transition-transform">
                <FaLinkedin size={28} className="text-indigo-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative z-10">
          <div className="relative w-72 h-72 group">
           
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className={`text-3xl font-bold ${colors.primary}`}>About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Passionate full-stack developer with expertise in creating robust web applications.
            Specializing in modern JavaScript frameworks and cloud-native solutions.
          </p>
          <div className={`p-6 ${colors.bgSecondary} rounded-xl`}>
            <h3 className={`text-xl font-semibold ${colors.primary} mb-4`}>Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {['React.js', 'Node.js', 'MongoDB', 'Tailwind', 'ASP.NET'].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${colors.bgPrimary} rounded-full`}></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className={`p-6 ${colors.bgSecondary} rounded-xl`}>
            <h3 className={`text-xl font-semibold ${colors.primary} mb-4`}>Experience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="font-semibold text-gray-800">Kuraz Tech</h4>
                <p className="text-gray-600">Front-End Developer Intern</p>
                <p className="text-sm text-gray-500">2024</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h4 className="font-semibold text-gray-800">AFRICOM Technologies</h4>
                <p className="text-gray-600">ASP.NET Developer</p>
                <p className="text-sm text-gray-500">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Merkato E-Commerce",
      description: "Full-stack platform with React & Node.js",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Contact Management",
      description: "ASP.NET MVC system with RBAC",
      tech: ["ASP.NET", "C#", "SQL"]
    },
    {
      title: "Student Management",
      description: "React-based educational platform",
      tech: ["React", "Tailwind", "Figma"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold ${colors.primary} mb-12 text-center`}>Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6 space-y-4">
                <div className={`w-full h-48 ${colors.bgSecondary} rounded-lg mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 ${colors.bgSecondary} ${colors.primary} text-sm rounded-full`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold ${colors.primary} mb-12`}>Let's Connect</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex justify-center gap-8">
            <a href="mailto:sulttanseniya@gmail.com" className={`${colors.primary} hover:underline flex items-center gap-2`}>
              <FaEnvelope size={24} /> sulttanseniya@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/SeniyaSultan" target="_blank" rel="noopener" className={`${colors.primary} hover:underline flex items-center gap-2`}>
              <FaGithub size={24} /> GitHub
            </a>
            <a href="https://t.me/SeniyaSultanCs" className={`${colors.primary} hover:underline flex items-center gap-2`}>
              <FaTelegram size={24} /> Telegram
            </a>
            <a href="https://www.linkedin.com/in/seniya-sultan-464486324/" className={`${colors.primary} hover:underline flex items-center gap-2`}>
              <FaLinkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className={`${colors.bgPrimary} text-white py-6 mt-20`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-indigo-100">
            © {new Date().getFullYear()} Seniya Sultan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}