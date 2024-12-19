import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>
          Hi, I’m <span className="highlight">Johnny Bui!</span>
        </h1>
        <p>
          A Computer Science student passionate about backend efficiency, AI, and game development. I enjoy problem solving
          as well as discovering innovative ways to tackle new problems.
        </p>
      </div>

      <div className="home-image">
        <img src="/assets/profile.png" alt="Profile" />
      </div>

      <div className="social-links">
        <h3>Additional Places to Find Me</h3>
        <div className="links">
          <a href="https://github.com/jbui14" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
      </div>

      <div className="home-description">
        <p>
          Looking to dive into as many areas of Computer Science to learn as much as I can.
        </p>
      </div>
    </div>
  );
}

export default Home;
