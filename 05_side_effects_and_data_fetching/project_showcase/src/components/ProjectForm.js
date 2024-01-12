import React, { useState } from "react";

const initialState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
};

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState(initialState); 
  // const { name, about, phase, link, image} = formData 

  function handleChange(e) {
    // const {name, value} = e.target 
    setFormData((formData) => {
      return {
        ...formData, 
        [e.target.name]: e.target.value, 
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
    // onAddProject(formData); 
    fetch("http://localhost:4000/projects", config) //could have wrote the actual config object here instead
      .then((res) => res.json())
      .then((newProject) => onAddProject(newProject));
    setFormData(initialState); 
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name} 
          onChange={handleChange} 
          required
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={formData.phase}
          onChange={handleChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
