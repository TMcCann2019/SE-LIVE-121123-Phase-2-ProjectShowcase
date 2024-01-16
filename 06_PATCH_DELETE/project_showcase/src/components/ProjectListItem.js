import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, onEditProject, onDeleteProject, onUpdateProject }) => {
  const { id, image, about, name, link, phase, claps } = project;
  const url = `http://localhost:4000/projects/${id}`;

  const handleClap = () => {
    const config ={
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ claps: claps + 1 })
    }
    fetch(url, config)
      .then((res) => res.json())
      .then(onUpdateProject);
  }

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      fetch(url, {
        method: "DELETE",
      })
      onDeleteProject(id);
    }
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{claps}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
