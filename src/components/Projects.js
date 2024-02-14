import React, { useState } from 'react';
import projectsData from '../data/ProjectsData';

function Projects() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.status === filter);

  return (
    <div className="container projects-container">
      <h2 className="text-center mb-4">Our Projects</h2>
      <p className="text-center mb-4 project-text">Explore a selection of our recent projects showcasing our expertise and quality workmanship.</p>
      
      <div className="project-navigation my-5">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</button>
        <button className={filter === 'repair' ? 'active' : ''} onClick={() => handleFilterChange('repair')}>Repair</button>
        <button className={filter === 'plumbing' ? 'active' : ''} onClick={() => handleFilterChange('plumbing')}>Plumbing</button>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProjects.map((project, index) => (
          <div className="col" key={index}>
            <div className="project">
              <img src={project.src} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-title">{project.title}</div>
                <div className="project-message text-center">{project.message}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
