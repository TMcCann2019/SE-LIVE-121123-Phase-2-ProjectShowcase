import { useState } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }

  return (
    <>
      <ProjectForm />
      <ProjectList
        onLoadProjects={loadProjects}
        projects={projects}
      />
    </>
  )
}

export default ProjectsContainer;