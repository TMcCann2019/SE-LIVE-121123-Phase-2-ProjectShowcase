import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";
import ProjectList from "./ProjectList";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  
  useEffect(() => {
    let url = "http://localhost:4000/projects";
    if (selectedPhase && searchQuery) {
      url += `?phase=${selectedPhase}&q=${searchQuery}`
    } else if (selectedPhase) {
      url += `?phase=${selectedPhase}`
    } else if (searchQuery) {
      url += `?q=${searchQuery}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }, [searchQuery, selectedPhase])

  const onAddProject = (savedProject) => {
    setProjects(projects => [...projects, savedProject]);
  }
  
  const onUpdateProject = (updatedProject) => {
    setProjectToEdit(null);
    const updatedProjects = projects.map((project) => {
      if (project.id === updatedProject.id) {
        return updatedProject;
      } else {
        return project;
      }
    })
    setProjects(updatedProjects);
    //setProjects(project.map((project) => project.id === updatedProject.id? updatedProject : project)) //could have written it this way
  };

  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const onDeleteProject = (projectId) => {
    console.log(`deleting project ${projectId}`);
    // const filteredProjects = projects.filter(project => {
    //   return project.id !== projectId;
    // })
    // setProjects(filteredProjects);
    setProjectToEdit(projects.filter((project) => project.id!== projectId))
  }

  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <>
      {renderForm()}
      <ProjectList
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        onEditProject={onEditProject}
        onUpdateProject={onUpdateProject}
        onDeleteProject={onDeleteProject}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}

export default ProjectsContainer;