import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

function ProjectsContainer () {
    const [projects, setProjects] = useState([]);

    const loadProjects = () => {
        fetch("http://localhost:4000/projects")
          .then((res) => res.json())
          .then((projects) => setProjects(projects));
      }

    return (
        <div>
            <ProjectForm />
            <ProjectList 
                projects={projects}
                onLoadProjects={loadProjects}
            />
        </div>
    )
}

export default ProjectsContainer;