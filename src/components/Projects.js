import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and contact information.',
      technologies: ['React', 'HTML/CSS', 'JavaScript'],
      link: 'https://github.com/jbui14/Portfolio-React',
    },
    {
      title: '2048 AI Assistant',
      description: 'A version of 2048 that has an AI powered assistant to help players.',
      technologies: ['Python', 'Pygame', 'AI', 'TKinter'],
      link: 'https://github.com/adrivnlopez/2048-Tutor',
    },
    {
      title: 'E-Commerce Website',
      description: 'An Ecommerce website.',
      technologies: ['Firebase', 'Nodejs', 'Google3DModeling', 'Javascript'],
      link: 'https://github.com/47tim/CPSC362ECommerce',
    },
    {
      title: 'Weather Station App',
      description: 'An open-source web-app used to track temperatures at certain locations.',
      technologies: ['SQL', 'CSS', 'HTML'],
      link: 'https://github.com/alee34161/CPSC-254-Project',
    },
  ];

  return (
    <div className="content-box">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h3>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
