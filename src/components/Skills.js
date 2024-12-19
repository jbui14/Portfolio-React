import React from 'react';
import './Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'React', icon: '/assets/react-icon.png' },
    { name: 'Python', icon: '/assets/python-icon.png' },
    { name: 'Unity', icon: '/assets/unity-icon.png' },
    { name: 'JavaScript', icon: '/assets/javascript-icon.png' },
    { name: 'HTML/CSS', icon: '/assets/html-icon.png' },
    { name: 'Java', icon: '/assets/java-icon.png' },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Adaptability',
    'Critical Thinking',
    'Time Management',
  ];

  return (
    <div className="main-content">
      <div className="content-box">
        <h1 className="page-title">Skills</h1>

        <div className="skills-section">
          <h2>Tech Stack</h2>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2>Soft Skills</h2>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
