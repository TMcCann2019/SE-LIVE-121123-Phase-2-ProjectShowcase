import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, onSelectPhase, searchQuery, onSearchChange, selectedPhase }) => {

  const handleSearch = (e) => {
    onSearchChange(e.target.value)
  }

  // const searchResults = projects.filter(project => {
  //   return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  // })

  const projectListItems = projects.map(project => (
    <ProjectListItem
      key={project.id}
      {...project}
    />
  ))

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button className={selectedPhase === "" ? "active" : ""} onClick={() => onSelectPhase("")}>All</button>
        <button className={selectedPhase === "5" ? "active" : ""} onClick={() => onSelectPhase("5")}>Phase 5</button>
        <button className={selectedPhase === "4" ? "active" : ""} onClick={() => onSelectPhase("4")}>Phase 4</button>
        <button className={selectedPhase === "3" ? "active" : ""} onClick={() => onSelectPhase("3")}>Phase 3</button>
        <button className={selectedPhase === "2" ? "active" : ""} onClick={() => onSelectPhase("2")}>Phase 2</button>
        <button className={selectedPhase === "1" ? "active" : ""} onClick={() => onSelectPhase("1")}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchQuery}
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;