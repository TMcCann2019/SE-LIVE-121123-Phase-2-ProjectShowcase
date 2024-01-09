import ProjectListItem from "./ProjectListItem";
import projects from "../projects";
import {useState} from "react";

const ProjectList = () => {
  const [searchQuery, setsearchQuery] = useState("")
  console.log(searchQuery)

  // console.log(projectListItems)

  const handleSearch = (e) => {
    setsearchQuery(e.target.value)
  }

  const searchResults = projects.filter(project => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const projectListItems = searchResults.map(project => {
    return <ProjectListItem key={project.id} project={project} />
  });

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleSearch} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
