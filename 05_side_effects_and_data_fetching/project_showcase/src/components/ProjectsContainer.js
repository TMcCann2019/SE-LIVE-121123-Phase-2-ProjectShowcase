import { useState } from "react";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  };

  const addProject = (newProject) => {
    console.log("🚀 ~ addProject ~ newProject:", newProject);
    newProject.id = projects[projects.length - 1].id + 1; 
    setProjects([...projects, newProject]); 
  };

  return (
    <>
      <ProjectForm
        onAddProject={addProject} 
      />
      <ProjectList onLoadProjects={loadProjects} projects={projects} />
    </>
  );
};

export default ProjectsContainer;
