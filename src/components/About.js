import React from 'react';
import './About.css';

function About() {
  return (
    <div className="content-box">
      <h1>About Me</h1>
      <p>
        I am a passionate Computer Science student with interests in backend development, AI, and game development. 
        My journey into technology has been driven by a curiosity to understand how things work and a desire to create 
        impactful solutions. I chose to go back to school to finish my degree after getting a taste of Computer Science
        during the pandemic.
      </p>
      <p>
        I am currently studying at California State University Fullerton. I have gained hands-on experience in programming, algorithms, 
        and software engineering. I constantly strive to learn and grow by exploring new technologies.
      </p>
      <h2>Education</h2>
      <ul>
        <li>Bachelor of Science in Computer Science - California State University Fullerton, May 2025</li>
        <li>Relevant Coursework: Data Structures, Algorithms, AI, Game Development, Compilers, Sofware Engineering</li>
      </ul>
      <h2>Interests</h2>
      <ul>
        <li>Exploring AI and Machine Learning</li>
        <li>Building efficient backend systems</li>
        <li>Developing engaging games</li>
      </ul>
      <h2>Hobbies</h2>
      <ul>
        <li>I thoroughly enjoy Pokemon.</li>
        <li>I enjoy playing video games with friends, often the competitive variants.</li>
        <li>Going to the gym.</li>
        <li>The resume below is an old resume because I am currently working to update mine after this semester.</li>
      </ul>
      <a
        href="https://docs.google.com/document/d/1qkNeByb6w8lahftlfIlBlCMhSbP_4i8hRMbzbYA9Tvc/edit?tab=t.0" // Replace with your target link
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to Resume
      </a>
    </div>
  );
}

export default About;
