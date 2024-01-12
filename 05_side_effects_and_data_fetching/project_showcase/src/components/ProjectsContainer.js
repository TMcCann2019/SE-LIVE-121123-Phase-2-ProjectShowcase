import { useState, useEffect } from "react";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  // const loadProjects = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projectsData) => setProjects(projectsData));
  // };

  useEffect(() => {
    let url = "http://localhost:4000/projects"
    if (selectedPhase && searchQuery) {
      url += `?phase=${selectedPhase}&q=${searchQuery}`
    } else if (selectedPhase){
      url += `?phase=${selectedPhase}`
    } else if (searchQuery) {
      url += `?q=${searchQuery}`
    }
    fetch(url)
      .then((res) => res.json()) //eventually would like to handle errors here
      .then((projectsData) => setProjects(projectsData))
  }, [selectedPhase, searchQuery]);

  const addProject = (newProject) => {
    console.log("🚀 ~ addProject ~ newProject:", newProject);
    //newProject.id = projects[projects.length - 1].id + 1; 
    setProjects([...projects, newProject]); 
  };

  return (
    <>
      <ProjectForm
        onAddProject={addProject} 
      />
      <ProjectList 
        projects={projects}
        onSelectPhase={setSelectedPhase}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedPhase={selectedPhase}
       />
    </>
  );
};

export default ProjectsContainer;
